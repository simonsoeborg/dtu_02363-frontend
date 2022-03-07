import { Container, Col, Card, Row } from "react-bootstrap";
import { is } from "../../Stores/ItemStore";
import { cs } from "../../Stores/CategoryStore";
import { observer } from "mobx-react-lite";
import Loading from "../../Partials/Loading";


const DisplayItems = () => {

  if (!is.Items) {
    return <Loading />;
  } else {

    const itemsToShow = is.Items.filter(item => item.categoryName === cs.ActiveCategory)

    return (
      <Container>
        <Row xs="auto" md="auto" className="g-4">
          {itemsToShow.map((item, index) => (
            <Col md="auto">
              <div onClick={() => alert(JSON.stringify(item.itemName))}>
                <Card
                  bg={"dark"}
                  style={{ width: "12.25rem" }}
                  text={"white"}
                  className="mb-2"
                >
                  <Card.Header key={index}>{item.itemName}</Card.Header>
                  <Card.Img variant="top" src="holder.js/100px160" />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default observer(DisplayItems);
