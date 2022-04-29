import {
  Row,
  Container,
  Card,
  Col,
  Button,
  InputGroup,
  FormControl, Modal, Alert
} from "react-bootstrap";
import { Dispatch, SetStateAction, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from '@mui/icons-material/Logout';
import { authToken } from '../../Stores/AuthTokenStore';

interface IProps {
  isLoggedIn: boolean;
  pin : number;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const LoginApp = (props: IProps) => {
  const { logout } = useAuth0();
  const [firstEntry, setFirstEntry] = useState("");
  const [secondEntry, setSecondEntry] = useState("");
  const [thirdEntry, setThirdEntry] = useState("");
  const [forthEntry, setForthEntry] = useState("");
  const [activeKeys, setActiveKeys] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnKeyClick = (value: string) => {
    if (firstEntry === "") {
      setFirstEntry(value);
    } else if (firstEntry !== "" && secondEntry === "") {
      setSecondEntry(value);
    } else if (secondEntry !== "" && thirdEntry === "") {
      setThirdEntry(value);
    } else if (thirdEntry !== "" && forthEntry === "") {
      setForthEntry(value);
    }
  };

  const enableAllKeys = () => {
    if (activeKeys) {
      setActiveKeys(false);
    }
  };

  const handleOnClearClick = () => {
    setFirstEntry("");
    setSecondEntry("");
    setThirdEntry("");
    setForthEntry("");
    enableAllKeys();
  };

  const disableAllKeys = () => {
    if (!activeKeys) {
      setActiveKeys(true);
    }
  };

  if (forthEntry !== "") {
    disableAllKeys();
  }

  const handleOnSubmit = () => {
    if (
      firstEntry !== "" &&
      secondEntry !== "" &&
      thirdEntry !== "" &&
      forthEntry !== ""
    ) {
      let temp = `${firstEntry}${secondEntry}${thirdEntry}${forthEntry}`;
      if(authToken.getPin() === +temp) {
        console.log("Login Success") // Can be removed
        props.setIsLoggedIn(true);
      } else {
        handleShow();
      }
    }
  };

  return (
    <Row className="justify-content-center">
      <Container>
        <Row className="justify-content-end">
            <Button variant="outline-danger" style={{ width: "4rem", margin: "0.25rem"}}
          onClick={() => logout({ returnTo: window.location.origin })}
          ><LogoutIcon /></Button>
        </Row>
      </Container>
    <Row className="justify-content-center">
      <Container style={{ maxWidth: "20rem", margin: "10rem" }}>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Alert variant="danger">
            <Alert.Heading>Wrong Pin!</Alert.Heading>
            <p>
              The Pin you have entered is not correct!
            </p>
          </Alert>
        </Modal.Body>
      </Modal>
        <Card>
          <Card.Body>
            <Row className="justify-content-center">
              <Row style={{ textAlign: "center" }}>
                <h2>Enter Pin</h2>
              </Row>
              {/* Input */}
              <Row className="PinFormRowInputBox">
                <Col>
                  <InputGroup size="lg">
                    <FormControl
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      disabled
                      value={firstEntry}
                      style={{ textAlign: "center" }}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup size="lg">
                    <FormControl
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      disabled
                      value={secondEntry}
                      style={{ textAlign: "center" }}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup size="lg">
                    <FormControl
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      disabled
                      value={thirdEntry}
                      style={{ textAlign: "center" }}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup size="lg">
                    <FormControl
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      disabled
                      value={forthEntry}
                      style={{ textAlign: "center" }}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Row>
            <Row className="justify-content-center">
              {/* 0 - 9 */}
              <Row className="PinFormRowBox">
                {/* 7-9 */}
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("7")}
                  >
                    7
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("8")}
                  >
                    8
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("9")}
                  >
                    9
                  </Button>
                </Col>
              </Row>
              <Row className="PinFormRowBox">
                {/* 4-6 */}
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("4")}
                  >
                    4
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("5")}
                  >
                    5
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("6")}
                  >
                    6
                  </Button>
                </Col>
              </Row>
              <Row className="PinFormRowBox">
                {/* 1-3 */}
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("1")}
                  >
                    1
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("2")}
                  >
                    2
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("3")}
                  >
                    3
                  </Button>
                </Col>
              </Row>
              <Row className="PinFormRowBox">
                {/* Cancel - 0 - Enter */}
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-danger"
                    onClick={() => handleOnClearClick()}
                  >
                    C
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    disabled={activeKeys}
                    onClick={() => handleOnKeyClick("0")}
                  >
                    0
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-success"
                    onClick={() => handleOnSubmit()}
                  >
                    E
                  </Button>
                </Col>
              </Row>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Row>
    </Row>
  );
};

export default LoginApp;
