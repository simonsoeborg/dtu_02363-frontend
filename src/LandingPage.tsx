import { Container } from "react-bootstrap";
import NotAuthorized from "./Components/Global/NotAuthorized";
import { authToken } from "./Stores/AuthTokenStore";

const LandingPage = () => {
  return (
    <Container>
      <Container>
        <h1>Landing Page</h1>
      </Container>
      { authToken.getRole() === "waiter" && (
        <NotAuthorized message="Waiters are restricted from viewing this page!" navUrl="/EasyTap"/>
      )}
    </Container>
  )
};

export default LandingPage;
