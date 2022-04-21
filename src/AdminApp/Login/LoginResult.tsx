import { authentication } from "../../Stores/AuthenticationStore";
import { useNavigate } from "react-router-dom";
import Loading from '../../Partials/Loading';
import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const LoginResult = () => {
    const navigate = useNavigate();

    if(authentication.getRole() === undefined) {
        return <Loading />
    } else {
        if(authentication.getRole() === "waiter") {
            setTimeout(() => {            
                navigate(`/EasyTap`, { replace: false });    
          }, 1500);
        }
        if(authentication.getRole() === "user") {    
            setTimeout(() => {
                navigate(`/`, { replace: false });
          }, 1500);
        }
        if(authentication.getRole() === "admin") {    
            setTimeout(() => {
                navigate(`/AdminPanel`, { replace: false });
          }, 1500);
        }
        return (
            <Container>
                <h1 className="text-success">Login Success</h1>
                <h2 className="text-warning">Role: {authentication.RBACAuth.role}</h2>
            </Container>
        )
    }
}

export default observer(LoginResult);