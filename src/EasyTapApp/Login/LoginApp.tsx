import {
  Row,
  Container,
  Card,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const LoginApp = (props: IProps) => {
  const [firstEntry, setFirstEntry] = useState("");
  const [secondEntry, setSecondEntry] = useState("");
  const [thirdEntry, setThirdEntry] = useState("");
  const [forthEntry, setForthEntry] = useState("");
  const [activeKeys, setActiveKeys] = useState(false);

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
      // Check Database for user that has this pin.

      // Then set isLoggedIn to True
      props.setIsLoggedIn(true);
    }
  };

  return (
    <Row className="justify-content-center">
      <Container style={{ maxWidth: "20rem", margin: "10rem" }}>
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
  );
};

export default LoginApp;
