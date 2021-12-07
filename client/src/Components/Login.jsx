import React from "react";
import { Card, Input, Button, } from "antd";
import { useLazyQuery } from "@apollo/client";
import Cookies from "js-cookie";
import { LOGIN_QUERY } from "../queries";

function Login () {

    const [getToken, { loading, data }] = useLazyQuery(LOGIN_QUERY);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    React.useEffect(() => {
        if (loading === false && data?.token) {
            Cookies.set("token", data?.token?.token);
            Cookies.set("teacherId", data?.token?.info?.teacherId);
            Cookies.set("name", data?.token?.info?.name);
            window.location = "./";
        }
    }, [loading, data]);

    return (
        <div className="login-container">
            <Card 
                title="Login" 
                className="login-form"
            >
                <Input 
                    placeholder="Email"
                    className="app-input"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Password"
                    type="password"
                    className="app-input"
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <Button 
                    type="primary" 
                    shape="round" 
                    size={26}
                    className="login-button"
                    onClick={() => {
                        getToken({
                            variables: {
                                email,
                                password
                            }
                        })
                    }}
                >
                    Log In
                </Button>
            </Card>
        </div>
    )
}

export default Login;