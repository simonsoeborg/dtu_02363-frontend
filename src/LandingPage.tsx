import { Container } from "react-bootstrap";
import NotAuthorized from "./Components/Global/NotAuthorized";
import { authentication } from './Stores/AuthenticationStore';

interface IProps {
  role : string,
}

const LandingPage = (props : IProps) => {
  return (
    <Container>
      { props.role === "waiter" ? (
        <NotAuthorized message="Waiters are restricted from viewing this page!" navUrl="/EasyTap"/>
      ) : (
      <Container>
        <h1>Landing Page</h1>
      </Container>
      )}
    </Container>
  )
};

export default LandingPage;
