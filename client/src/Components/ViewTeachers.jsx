import { Card, List, Avatar, Typography } from "antd";
import React from "react";
import "../styles/teachers.css";
import TopBar from "./TopBar";
import { TEACHERS_QUERY } from "../queries";
import { useQuery } from "@apollo/client";

const { Link } = Typography;

function ViewTeachers () {
    const { data, loading, } = useQuery(TEACHERS_QUERY);
    const [teachers, setTeachers] = React.useState([]);

    React.useEffect(() => {
        if (loading === false) {
            setTeachers(data.teachers);
        }
    }, [data, loading]);

    return (
        <>
        <TopBar />
        <div className="teachers-view-container">
            <Card
                title={
                    <>
                        <h3>View Teachers</h3>
                        <p>School Database - List of All Teachers</p>
                    </>
                }
            >
                <List
                    itemLayout="horizontal"
                    loading={loading}
                    dataSource={teachers}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={item.name}
                                description={item.email + " - " + item.education}
                            />
                            <div>
                                <Link href="mailto:john.doe@example.com" className="margin-x-5">Contact</Link>
                                <Link href={`teacher/${index+1}`} className="margin-x-5">Details</Link>
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