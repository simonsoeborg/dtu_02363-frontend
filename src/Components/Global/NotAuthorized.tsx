import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

interface IProps {
    message? : string,
    navUrl? : string
}

const NotAuthorized = (props : IProps) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(props.navUrl!! || "/", { replace: false });
    })

    return (
        <Container>
            <Row className="justify-content-center" style={{ backgroundColor: "grey"}}>
                <h1 style={{ color : "Red"}}>Not Authorized!</h1>
                <h3 style={{ color : "Yellow"}}>
                    You do not have sufficient permissions to view this component! 
                    <br /> 
                    Error message: <p>{props.message}</p>
                </h3>
            </Row>
        </Container>
    )
}

export default NotAuthorized;