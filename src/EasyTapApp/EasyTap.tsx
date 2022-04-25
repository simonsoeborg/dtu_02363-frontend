import { useState } from "react";
import { Container } from "react-bootstrap";
import LoginApp from "./Login/LoginApp";
import RestaurantOverview from "./RestaurantLayout/RestaurantOverview";
import { useAuth0 } from "@auth0/auth0-react";
import { authentication } from "../Stores/AuthenticationStore";

const MainApp = () => {
  const { isAuthenticated } = useAuth0();
  const [pin, setPin] = useState(0);
  if(isAuthenticated) {
    if(pin === 0 || pin === undefined)
    setPin(authentication.getPin());
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(`isLoggedIn: ${isLoggedIn.toString()}`)
  if (!isLoggedIn) {
    return (
      <Container fluid>
        <LoginApp isLoggedIn={isLoggedIn} pin={pin} setIsLoggedIn={setIsLoggedIn} />
      </Container>
    );
  }

  if (isLoggedIn) {
    return (
      <Container fluid>
        <RestaurantOverview />
      </Container>
    );
  }

  return <div></div>;
};

export default MainApp;
