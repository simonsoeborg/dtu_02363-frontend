import { authentication } from "../../Stores/AuthenticationStore";
import { useNavigate } from "react-router-dom";
import Loading from '../../Partials/Loading';
import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
    role : string,
    pin : number,
    setRole : Dispatch<SetStateAction<string>>;
    setPin : Dispatch<SetStateAction<number>>;
}

const LoginResult = (props : IProps) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(props.role === "waiter") {
            setTimeout(() => {        
                navigate(`/EasyTap`, { replace: false });    
          }, 1500);
        }
        if(props.role === "user") {    
            setTimeout(() => {
                navigate(`/`, { replace: false });
          }, 1500);
        }
        if(props.role === "admin") {
            setTimeout(() => {
                navigate(`/AdminPanel`, { replace: false });
          }, 1500);
        }
    })
    if(props.role === undefined) {
        return <Loading />
    } else {
        return (
            <Container style={{ textAlign: "center", marginTop: "10rem"}}>
                <h1 className="text-success">Login Success</h1>
            </Container>
        )
    }
}

export default observer(LoginResult);