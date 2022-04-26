import {
    Row,
    Container,
    Card,
    Col,
    Button
  } from "react-bootstrap";
  import { Dispatch, SetStateAction, useState } from "react";

  interface IProps {
    amountChosen: number;
    setAmount: Dispatch<SetStateAction<number>>;
  }

  const OrderAmountPanel = (props : IProps) => {

    const handleOnKeyClick = (value: number) => {
        // observe pressed number and add to currrent amountChosen.
        if(props.amountChosen!==0){
            props.setAmount(props.amountChosen*10+value)
        }
        else {
            props.setAmount(value)
        }
    };
  
    const handleOnClearClick = () => {
        // Clear Chosen amount 
        props.setAmount(0);
    };
  
    return (
         <Container style={{ marginTop: "0.5rem" }}>
          <Card className="calc-body card-shadow">
              <Card.Header className="calc-header">
                {props.amountChosen.toString()} x
              </Card.Header>
            <Card.Body>
              <Row className="justify-content-center">
                {/* 0 - 9 */}
                <Row className="PinFormRowBox">
                  {/* 7-9 */}
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-dark"
                      onClick={() => handleOnKeyClick(7)}
                    >
                      7
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-dark"
                      onClick={() => handleOnKeyClick(8)}
                    >
                      8
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-dark"
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
                      variant="outline-dark"
                      onClick={() => handleOnKeyClick(4)}
                    >
                      4
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-dark"
                      onClick={() => handleOnKeyClick(5)}
                    >
                      5
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-dark"
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
                      variant="outline-dark"
                      onClick={() => handleOnKeyClick(1)}
                    >
                      1
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-dark"
                      onClick={() => handleOnKeyClick(2)}
                    >
                      2
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-dark"
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
                      className="PinForm PinForm-clear"
                      variant="outline-danger"
                      onClick={() => handleOnClearClick()}
                    >
                      C
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="PinForm"
                      variant="outline-dark"
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
    );
  };
  
  export default OrderAmountPanel;
  