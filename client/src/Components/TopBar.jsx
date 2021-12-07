import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import "../styles/topbar.css";

function TopBar () {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        const token = Cookie.get("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    if (isLoggedIn) {
        return (
            <Card className="topbar-card">
                <span className="title">Hi {Cookie.get("name")}</span>
                <span className="is-right">
                    <Link to="/signin" className="margin-x-5">Teachers</Link>
                    <Link to="/add-student" className="margin-x-5">Add Student</Link>
                    <a
                        href="#logout"
                        onClick={() => {
                            Cookie.remove("token");
                            Cookie.remove("teacherId");
                            window.location.reload();
                        }}
                        className="margin-x-5"
                    >
                        Log Out
                    </a>
                </span>
            </Card>
        );
    }
    else {
        return (
            <Card className="topbar-card">
                <span className="is-right">
                    <Link to="/signin" className="margin-x-5">Sign In</Link>
                    <Link to="/" className="margin-x-5">Teachers</Link>
                </span>
            </Card>
        );
    }

}

export default TopBar;