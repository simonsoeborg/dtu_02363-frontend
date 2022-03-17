import {
    Row,
    Container,
    Card,
    Col,
    Button
  } from "react-bootstrap";
  import { Dispatch, SetStateAction, useState } from "react";
  
  const OrderAmountPanel = () => {
    const [AmountChosen, setAmount] = useState(0);

    const handleOnKeyClick = (value: number) => {
        // observe pressed number and add to currrent amountChosen.
        if(AmountChosen!==0){
            setAmount(AmountChosen*10+value)
        }
        else {
            setAmount(value)
        }
        console.log(AmountChosen)
    };
  
    const handleOnClearClick = () => {
        // Clear Chosen amount 
        setAmount(0);
    };
  
    return (
      <Row className="justify-content-center">
        <Container style={{ maxWidth: "20rem", margin: "2rem" }}>
          <Card>
              <Card.Header>
                  Current quantaty chosen: {AmountChosen.toString()}
              </Card.Header>
            <Card.Body>
              <Row className="justify-content-center">
                {/* 0 - 9 */}
                <Row className="PinFormRowBox">
                  {/* 7-9 */}
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-primary"
                      onClick={() => handleOnKeyClick(7)}
                    >
                      7
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-primary"
                      onClick={() => handleOnKeyClick(8)}
                    >
                      8
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-primary"
                      onClick={() => handleOnKeyClick(9)}
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
                      onClick={() => handleOnKeyClick(4)}
                    >
                      4
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-primary"
                      onClick={() => handleOnKeyClick(5)}
                    >
                      5
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-primary"
                      onClick={() => handleOnKeyClick(6)}
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
                      onClick={() => handleOnKeyClick(1)}
                    >
                      1
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-primary"
                      onClick={() => handleOnKeyClick(2)}
                    >
                      2
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-primary"
                      onClick={() => handleOnKeyClick(3)}
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
                      onClick={() => handleOnKeyClick(0)}
                    >
                      0
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
  
  export default OrderAmountPanel;
  