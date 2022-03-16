import { useState } from "react";
import { Container } from "react-bootstrap";
import LoginApp from "./Login/LoginApp";
import Order from "./Order/Order";

const MainApp = () => {

  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  // console.log(`isLoggedIn: ${isLoggedIn.toString()}`)
  if(!isLoggedIn){
    return (
      <Container fluid>
          <LoginApp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Container>
    );
  }

  if(isLoggedIn){
    return (
      <Container fluid>
          <Order/>
      </Container>
    );
  }

  return (
    <div></div>
  );
};

export default MainApp;
