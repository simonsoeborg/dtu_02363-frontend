import { Container, Card } from "react-bootstrap";
import NotAuthorized from "./Components/Global/NotAuthorized";
import { authToken } from "./Stores/AuthTokenStore";
import { authentication } from "./Stores/AuthenticationStore";
import { useAuth0 } from "@auth0/auth0-react";
import LandingImage from "../src/resources/landingPageImage.png";

const LandingPage = () => {
  const { isAuthenticated } = useAuth0();
  let collect: any = localStorage.getItem("authValues");
  if (isAuthenticated) {
    if (collect !== '""' && collect.length > 0) {
      let data = JSON.parse(collect!!);
      authentication.decodeJWT(data);
    }
  }
  return (
    <Container>
      <Container fluid={true} className="p-0">
        <Card>
          <Card.Img
            src={LandingImage}
            alt="LandingImage"
            className="img-fluid"
            variant="top"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </Card>
      </Container>
      {authToken.getRole() === "waiter" && (
        <NotAuthorized
          message="Waiters are restricted from viewing this page!"
          navUrl="/EasyTap"
        />
      )}
    </Container>
  );
};

export default LandingPage;
