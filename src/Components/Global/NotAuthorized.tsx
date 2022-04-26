import { Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

interface IProps {
    message? : string,
    navUrl? : string
}

const NotAuthorized = (props : IProps) => {
    const navigate = useNavigate();
    setInterval(() => {
        navigate(props.navUrl!! || "/", { replace: false });
    }, 5000)
    return (
        <Container>
            <Row className="justify-content-center">
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