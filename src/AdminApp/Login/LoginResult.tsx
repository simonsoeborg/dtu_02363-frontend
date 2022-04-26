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
        if(authentication.getRole() === "waiter") {
            props.setRole(authentication.getRole())
            setTimeout(() => {        
                navigate(`/EasyTap`, { replace: false });    
          }, 2500);
        }
        if(authentication.getRole() === "user") {  
            props.setRole(authentication.getRole())  
            setTimeout(() => {
                navigate(`/`, { replace: false });
          }, 1500);
        }
        if(authentication.getRole() === "admin") {
            props.setRole(authentication.getRole())
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