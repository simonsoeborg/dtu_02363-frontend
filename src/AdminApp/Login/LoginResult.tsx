import { authentication } from "../../Stores/AuthenticationStore";
import { useNavigate } from "react-router-dom";
import Loading from '../../Partials/Loading';
import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const LoginResult = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(authentication.getRole() === "waiter") {
            console.log(authentication.getRole())    
            setTimeout(() => {        
                navigate(`/EasyTap`, { replace: false });    
          }, 1500);
        }
        if(authentication.getRole() === "user") {    
            console.log(authentication.getRole())    
            setTimeout(() => {
                navigate(`/`, { replace: false });
          }, 1500);
        }
        if(authentication.getRole() === "admin") {
            console.log(authentication.getRole())    
            setTimeout(() => {
                navigate(`/AdminPanel`, { replace: false });
          }, 1500);
        }
    })
    if(authentication.getRole() === undefined) {
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