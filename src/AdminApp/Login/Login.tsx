import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Form, Image, Row } from "react-bootstrap";
import defaultUserImage from '../../resources/default_user.jpg';
import { useAuth0 } from "@auth0/auth0-react";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formFilled, setFormFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [passwordFilled, setPasswordFilled] = useState(false);
  const navigate = useNavigate();

  const checkIfFormIsFilled = () => {
    if (email.length > 3) {
      setEmailFilled(true);
    } else {
      setEmailFilled(false);
    }

    if (password.length > 3) {
      setPasswordFilled(true);
    } else {
      setPasswordFilled(false);
    }

    if (emailFilled && passwordFilled) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  };

  const routeEditChange = () => {
    navigate(`/Login/Register/`, { replace: false });
  };

  /* const { loginWithPopup } = useAuth0(); */
  return (
    <Row className="justify-content-center">
      <Container style={{ maxWidth: "20rem", margin: "10rem" }}>
        <Card>
          <Card.Header>
            <Card.Title>Login</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className="justify-content-center">
              <Image
                style={{
                  maxHeight: "7.5rem",
                  maxWidth: "7.5rem",
                  padding: "1rem",
                  margin: "1rem",
                }}
                fluid
                roundedCircle
                src={defaultUserImage}
              />
            </Row>
            <Row className="justify-content-center" style={{ margin: "1rem" }}>
              <p style={{ textAlign: "center" }}>Login with: </p>
              <Button
                style={{ width: "30%" }}
                variant="outline-primary"
                /* onClick={() => loginWithPopup()} */
              >
                <GoogleIcon />{" "}
              </Button>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newVal = e.currentTarget.value;
                      setEmail(newVal);
                      checkIfFormIsFilled();
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newVal = e.currentTarget.value;
                      setPassword(newVal);
                      checkIfFormIsFilled();
                    }}
                  />
                </Form.Group>
              </Form>
            </Row>
          </Card.Body>
          <Card.Footer style={{ textAlign: "center", padding: "1rem" }}>
            {formFilled ? (
              <Button
                style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
                variant="outline-success"
                onMouseOver={checkIfFormIsFilled}
              >
                Login
              </Button>
            ) : (
              { checkIfFormIsFilled } && (
                <Button
                  style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
                  variant="outline-success"
                  disabled
                >
                  Login
                </Button>
              )
            )}
            <Button
              style={{ maxWidth: "6rem" }}
              variant="outline-primary"
              onClick={() => routeEditChange()}
            >
              Register
            </Button>
            <Button
              style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
              onClick={() => navigate(-1)}
              variant="outline-danger"
            >
              Cancel
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </Row>
  );
};

export default Login;
