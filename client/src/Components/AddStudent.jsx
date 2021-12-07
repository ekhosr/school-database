import React from "react";
import { Card, Input, Button, Alert } from "antd";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { ADD_STUDENT } from "../queries";
import TopBar from "./TopBar";

function Login () {

    const [addStudent, { data, loading }] = useMutation(ADD_STUDENT);
    const [name, setName] = React.useState("");
    const [subjects, setSubjects] = React.useState("");
    const [error, setError] = React.useState("");

    return (
        <>
        <TopBar />
        <div className="login-container">
            <Card 
                title="Add Student" 
                className="login-form"
            >
                {
                    loading === false && data?.addStudent?.data?.name ? 
                    <Alert message="Student Added" type="success" />
                    : loading === false && data?.addStudent?.data?.err ?
                    <Alert message={data?.addStudent?.data?.err} type="error" />
                    : error ?
                    <Alert message={error} type="error" />
                    : null
                }
                <br/>
                <Input 
                    placeholder="Student Name"
                    className="app-input"
                    onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    placeholder="Subjects (like Maths, English)"
                    className="app-input"
                    onChange={(e) => setSubjects(e.target.value)}
                />
                
                <Button 
                    type="primary" 
                    shape="round" 
                    size={26}
                    className="login-button"
                    onClick={() => {
                        if (Cookies.get("token")) {
                        addStudent({
                            variables: {
                                name,
                                subjects: subjects.split(",").map(function(item) {
                                    return item.trim();
                                }),
                                token: Cookies.get("token")
                            }
                        })
                        } else setError("Login to add student")
                    }}
                >
                    Add
                </Button>
            </Card>
        </div>
        </>
    )
}

export default Login;