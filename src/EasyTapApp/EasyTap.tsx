import { useState } from "react";
import { Container } from "react-bootstrap";
import LoginApp from "./Login/LoginApp";
import RestaurantOverview from "./RestaurantLayout/RestaurantOverview";

interface IProps {
  role : string,
  pin : number,
}

const MainApp = (props : IProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (!isLoggedIn) {
    return (
      <Container fluid>
        <LoginApp isLoggedIn={isLoggedIn} pin={props.pin} setIsLoggedIn={setIsLoggedIn} />
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
