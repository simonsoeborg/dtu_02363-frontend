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

interface IProps {}

const OrderDisplayCalculator = (props: IProps) => {
  const [quantity, setQuantity] = useState("");

  const handleOnKeyClick = (value: string) => {
    setQuantity(value);
  };

  const handleOnClearClick = () => {
    setQuantity("1");
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
              <Row></Row>
            </Row>
            <Row className="justify-content-center">
              {/* 0 - 9 */}
              <Row className="PinFormRowBox">
                {/* 7-9 */}
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    onClick={() => handleOnKeyClick("7")}
                  >
                    7
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    onClick={() => handleOnKeyClick("8")}
                  >
                    8
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
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
                    onClick={() => handleOnKeyClick("4")}
                  >
                    4
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    onClick={() => handleOnKeyClick("5")}
                  >
                    5
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
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
                    onClick={() => handleOnKeyClick("1")}
                  >
                    1
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    onClick={() => handleOnKeyClick("2")}
                  >
                    2
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    onClick={() => handleOnKeyClick("3")}
                  >
                    3
                  </Button>
                </Col>
              </Row>
              <Row className="PinFormRowBox">
                {/* Cancel - 0 - Enter */}
                <Col></Col>
                <Col>
                  <Button
                    className="PinForm"
                    variant="outline-primary"
                    onClick={() => handleOnKeyClick("0")}
                  >
                    0
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Row>
  );
};

export default OrderDisplayCalculator;
