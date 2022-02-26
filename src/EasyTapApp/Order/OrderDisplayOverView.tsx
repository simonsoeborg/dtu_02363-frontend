import { Container, Col, ListGroup, Row, ListGroupItem } from "react-bootstrap";
import { is } from "../../Stores/ItemStore";
import { observer } from "mobx-react-lite";
import Loading from "../../Partials/Loading";

const OrderDisplayOverView = () => {
  if (!is.Items) {
    return <Loading />;
  } else {
    return (
      <Container>
            <Row>
                  <h2>Order Overview</h2> 
            </Row>
            <br></br>
        <ListGroup>
            <ListGroupItem>
                <Row>
                    <Col md="auto">1x</Col>
                    <Col md={8}>pizza</Col>
                    <Col md="auto">$pris$</Col> 
                </Row>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col md="auto">2x</Col>
                    <Col md={8}>pommes</Col>
                    <Col md="auto">$pris$</Col> 
                </Row>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col md="auto">1x</Col>
                    <Col md={8}>burger</Col>
                    <Col md="auto">$pris$</Col> 
                </Row>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col md="auto">1x</Col>
                    <Col md={8}>M. Cola</Col>
                    <Col md="auto">$pris$</Col> 
                </Row>
            </ListGroupItem>
            <ListGroupItem>
            <Row>
                    <Col md="auto">1x</Col>
                    <Col md={8}>S. Max</Col>
                    <Col md="auto">$pris$</Col> 
                </Row>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col md="auto">Total:</Col>
                    <Col md="auto">10000</Col>
                    <Col md="auto">$</Col> 
                </Row>
            </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
};

export default observer(OrderDisplayOverView);
