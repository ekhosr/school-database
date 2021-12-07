import { gql } from "@apollo/client";

export const TEACHERS_QUERY = gql`
{
    teachers {
        name,
        email,
        teacherId,
        education
    }
}
`;

export const TEACHER_INFO = gql`
    query Teacher($teacherId: Int!) {
        teacher (teacherId: $teacherId) {
            name,
            email,
            teacherId,
            education,
            students {
                _id,
                name,
                subjects
            }
        }
    }
`;

export const DELETE_STUDENT = gql`
    mutation DeleteStudent ($studentId: String!, $token: String!) {
        deleteStudent (studentId: $studentId, token: $token) {
            deletedCount,
            err
        }
    }
`;

export const LOGIN_QUERY = gql`
    query Token ($email: String!, $password: String!) {
        token (email: $email, password: $password) {
            token,
            err,
            info {
                teacherId,
                name
            }
        }
    }
`;

export const ADD_STUDENT = gql`
    mutation AddStudent (
        $name: String!,
        $subjects: [String],
        $token: String!
    ) {
        addStudent (
            name: $name,
            subjects: $subjects,
            token: $token
        ) {
            err,
            data {
                name
            }
        }
    }
`

