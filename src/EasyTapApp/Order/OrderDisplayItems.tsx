import { Container, Col, Card, Row } from "react-bootstrap";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import ItemModel from "../../Models/ItemModel";

interface IProps {
  items: ItemModel[];
  setItems: Dispatch<SetStateAction<ItemModel[]>>;
  selectedCategory: String;
  orderItems: ItemModel[];
  setOrderItems: Dispatch<SetStateAction<ItemModel[]>>;
  amountChosen: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

const DisplayItems = (props: IProps) => {
  const itemsToShow = props.items.filter(
    (item) => item.categoryName === props.selectedCategory
  );

  const [itemId, setItemId] = useState(0);

  const addItems = (newItem : ItemModel, amount : Number) => {
  
    // Få loopet til at virke (således at den laver amount-antal kopier)
    for (let i = 0; i< amount; i++){
      setItemId(itemId+1);
      props.setOrderItems(props.orderItems.concat(newItem));
    }
  }

  const handleOnClickEvent = (item: ItemModel) => {

      const newItemObject = {
        id: itemId,
        itemName: item.itemName,
        price: item.price,
        categoryName: item.categoryName
      };
    addItems(newItemObject, 3)
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
