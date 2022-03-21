import { authentication } from "../../Stores/AuthenticationStore";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Loading from '../../Partials/Loading';
import { Container } from "react-bootstrap";

const LoginResult = () => {
    const navigate = useNavigate();

    if(!authentication.RBACAuth) {
        return <Loading />
    } else {
        console.log(authentication.getRole())
        if(authentication.getRole() === "waiter") {
            navigate(`/EasyTap`, { replace: false });
        }
        if(authentication.getRole() === "user") {
            navigate(`/`, { replace: false });
        }
        if(authentication.getRole() === "admin") {
            navigate(`/AdminPanel`, { replace: false });
        }
        return (
            <Container>
                <h1 className="text-success">Login Success</h1>
            </Container>
        )
    }
}

export default LoginResult;