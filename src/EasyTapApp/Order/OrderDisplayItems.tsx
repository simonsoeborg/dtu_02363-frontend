import { Container, Col, Card, Row } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
import ItemModel from "../../Models/ItemModel";
import TapOutModel from "../../Models/TapOutModel";

interface IProps {
  items: ItemModel[];
  setItems: Dispatch<SetStateAction<ItemModel[]>>;
  selectedCategory: String;
  orderItems: ItemModel[];
  setOrderItems: Dispatch<SetStateAction<ItemModel[]>>;
}

const DisplayItems = (props: IProps) => {
  const itemsToShow = props.items.filter(
    (item) => item.categoryName === props.selectedCategory
  );

  const handleOnClickEvent = (item: ItemModel) => {
    props.setOrderItems(props.orderItems.concat(item));
  };

  return (
    <Container>
      <Row xs="auto" md="auto" className="g-4">
        {itemsToShow.map((item, index) => (
          <Col md="auto" key={index}>
            <div key={index} onClick={() => handleOnClickEvent(item)}>
              <Card
                bg={"dark"}
                style={{ width: "12.25rem" }}
                text={"white"}
                className="mb-2"
                key={index}
              >
                <Card.Header>{item.itemName}</Card.Header>
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
