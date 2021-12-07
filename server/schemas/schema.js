const graphql = require("graphql");
const studentModel = require("../models/students");
const teacher = require("../models/teacher");
const { sign, verify } = require("../utils/token");

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} = graphql;

const fakeDB = {
    teachers: [],
    students: [],
}

const teacherType = new GraphQLObjectType({
    name: "Teacher",
    fields: () => ({
        teacherId: {
            type: graphql.GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        education: {
            type: GraphQLString
        },
        students: {
            type: new GraphQLList(studentType),
            args: { teacherId: { type: GraphQLInt } },
            resolve: async (parent) => {
                const _students = await studentModel.find({ teacherId: parent.teacherId });
                return _students;
            }
        }
    })
});

const studentType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        _id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        subjects: {
            type: new GraphQLList(GraphQLString)
        },
        teacherId: {
            type: GraphQLInt
        }
    })
});

const addStudentResponseType = new GraphQLObjectType({
    name: "addStudentResponse",
    fields: () => ({
        data: { type: studentType },
        err: { type: GraphQLString }
    })
});

const deleteStudentResponseType = new GraphQLObjectType({
    name: "deleteStudentResponse",
    fields: () => ({
        deletedCount: { type: GraphQLInt },
        err: { type: GraphQLString }
    })
});

const tokenType = new GraphQLObjectType({
    name: "token",
    fields: () => ({
        err: { type: GraphQLString },
        token: { type: GraphQLString },
        info: { type: teacherType }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        teachers: {
            type: new GraphQLList(teacherType),
            resolve: async () => {
                const data = await teacher.find({});
                return data;
            }
        },
        teacher: {
            type: teacherType,
            args: {
                teacherId: { type: GraphQLInt }
            },
            resolve: async (parent, args) => {
                const _teacher = await teacher.find({ teacherId: args.teacherId });
                console.log("Teacher", _teacher);
                return _teacher[0];
            }
        },
        students: {
            type: new GraphQLList(studentType),
            args: {
                teacherId: { type: GraphQLInt }
            },
            resolve: async (parent, args) => {
                const students = await studentModel.find({ teacherId: args.teacherId });
                return students;
            }
        },
        token: {
            type: tokenType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve: async (parent, args) => {
                const _teacher = await teacher.find({ email: args.email, password: args.password });
                if (_teacher.length === 0) {
                    return { err: "Wrong Username or Password" }
                }
                else {
                    return { token: sign({ teacherId: _teacher[0].teacherId }), info: _teacher[0] }
                }
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addStudent: {
            type: addStudentResponseType,
            args: {
                name: { type: GraphQLString },
                subjects: { type: new GraphQLList(GraphQLString) },
                token: { type: GraphQLString }
            },
            resolve: async (parent, args) => {
                const payload = verify(args.token);
                if (!payload) {
                    return { err: "Login to add student" }
                }
                const teacherId = payload.teacherId;
                const student = new studentModel({
                    name: args.name,
                    subjects: args.subjects,
                    teacherId
                });
                const res = await student.save();
                return { data: res };
            }
        },
        deleteStudent: {
            type: deleteStudentResponseType,
            args: {
                studentId: { type: GraphQLString },
                token: { type: GraphQLString }
            },
            resolve: async (parent, args) => {
                const student = await studentModel.findById(args.studentId);
                const payload = verify(args.token);
                if (!payload) {
                    return { err: "Login To Delete this student" }
                }
                if (!student) {
                    return { err: "Student doesnot exist" }
                }
                if (student && parseInt(student.teacherId) === parseInt(payload.teacherId)) {
                    const user = await studentModel.deleteOne({ _id: args.studentId });
                    return user;
                }
                else {
                    return { err: "You are not authorized to delete this student" }
                }
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});