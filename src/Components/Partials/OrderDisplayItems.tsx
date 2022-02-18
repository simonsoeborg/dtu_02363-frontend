import { Container, Col, Card, Row } from "react-bootstrap";
import { is } from "../../Stores/ItemStore";
import { observer } from "mobx-react-lite";
import Loading from "./Loading";

const DisplayItems = () => {
  if (!is.Items) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Row xs="auto" md="auto" className="g-4">
            {is.Items.map((item, index) => (
          <Col md="auto">
              <Card
                bg={"dark"}
                style={{ width: "12.25rem"}}
                text={"white"}
                className="mb-2"
              >
                <Card.Header key={index}>{item.itemName}</Card.Header>
                <Card.Img variant="top" src="holder.js/100px160" />
              </Card> 
          </Col>
            ))}
        </Row>
      </Container>
    );
  }
};

export default observer(DisplayItems);
