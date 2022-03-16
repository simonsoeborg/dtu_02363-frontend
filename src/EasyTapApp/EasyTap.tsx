import { useState } from "react";
import { Container } from "react-bootstrap";
import LoginApp from "./Login/LoginApp";
import RestaurantOverview from "./RestaurantLayout/RestaurantOverview";

const MainApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(`isLoggedIn: ${isLoggedIn.toString()}`)
  if (!isLoggedIn) {
    return (
      <Container fluid>
        <LoginApp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
