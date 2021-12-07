import { Card, List, Avatar, Divider, Button, Tooltip } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import React from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import "../styles/teachers.css";
import { TEACHER_INFO, DELETE_STUDENT } from "../queries";
import { useParams } from "react-router";
import Cookies from "js-cookie";
import TopBar from "./TopBar";

function ViewTeachers (props) {

    const { id } = useParams();
    const [getTeacherInfo, { data, loading }] = useLazyQuery(TEACHER_INFO, { variables: {teacherId: parseInt(id)} });
    const [teacher, setTeacher] = React.useState(null);
    const [currentTeacherId, setCurrentTeacherId] = React.useState(null);
    const [ deleteStudent, deleteStudentResponse ] = useMutation(DELETE_STUDENT);
    const [loaded, setLoaded] = React.useState(false);
    

    React.useEffect(() => {
        if (loading === false && loaded) {
            setTeacher(data.teacher);
        }
    }, [loading, data]);

    React.useEffect(() => {
        getTeacherInfo( { variables: {teacherId: parseInt(id)} });
        setCurrentTeacherId(Cookies.get("teacherId"));
        setLoaded(true);
    }, []);

    return (
        <>
        <TopBar />
        <div className="teachers-view-container">
            <Card
                title={
                    <>
                        <h3>View Teachers</h3>
                        <p>School Database - Teacher Details</p>
                    </>
                }
            >
                <div className="teacher-info-container">
                    <div>
                        <Avatar size={128} src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <div>
                        <h2>{ teacher?.name }</h2>
                        <h4>{ teacher?.email }</h4>
                        <h4>{ teacher?.education } - <i>ID: {teacher?.teacherId}</i></h4>
                    </div>
                </div>
                <Divider />
                    <h2>
                        Students
                    </h2>
                <Divider />
                <List
                    itemLayout="horizontal"
                    dataSource={teacher?.students || []}
                    loading={loading || deleteStudentResponse.loading}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={item.name}
                                description={item.subjects.join(", ")}
                            />
                            <div>
                                <Tooltip title="Delete Student">
                                    {
                                        parseInt(currentTeacherId) === parseInt(teacher.teacherId) ?
                                    <Button 
                                        type="primary" 
                                        className="margin-x-5" 
                                        shape="circle" 
                                        danger 
                                        icon={<DeleteOutlined />} 
                                        onClick={() => {
                                            deleteStudent({
                                                variables: {
                                                studentId: item._id,
                                                token: Cookies.get("token") || ""
                                            }});
                                            getTeacherInfo( { variables: {teacherId: parseInt(id)} });
                                        }}
                                    /> : null
                                    }
                                </Tooltip>
                            </div>
                      </List.Item>
                    )}
                />
            </Card>
        </div>
        </>
    )
}

export default ViewTeachers;