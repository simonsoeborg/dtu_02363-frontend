import { Container, Col, Card, Row } from "react-bootstrap";
import { Dispatch, SetStateAction } from 'react';
import ItemModel from "../../Models/ItemModel";


interface IProps {

  items : ItemModel[],
  setItems : Dispatch<SetStateAction<ItemModel[]>>,
  selectedCategory : String
}

const DisplayItems = (props : IProps) => {

    const itemsToShow = props.items.filter(item => item.categoryName=== props.selectedCategory)

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
};

export default DisplayItems;
