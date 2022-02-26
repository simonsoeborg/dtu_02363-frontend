import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";

const LandingPage = () => {
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return (
      <Container>
        <h1>Landing Page</h1>
        <p>Testing stuff</p>
        <p>Github Runner works!</p>
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>Landing Page</h1>
        <p>Testing stuff</p>
        <p>Github Runner works!</p>
        <p>{JSON.stringify(user)}</p>
      </Container>
    );
  }
};

export default LandingPage;
