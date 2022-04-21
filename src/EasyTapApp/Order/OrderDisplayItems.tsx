import { Container, Col, Card, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
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

  
 const [currentItemId, setCurrentItemId] = useState(0);
 
  const addItems = (newItem : ItemModel, amount : number) => {
    const items = [];

    // Få loopet til at virke (således at den laver amount-antal kopier)
      for (let i = 0; i< amount; i++){

        const newItemObject = {
          id: currentItemId+i,
          itemName: newItem.itemName,
          price: newItem.price,
          categoryName: newItem.categoryName
        };

      items.push(newItemObject)
      }

      setCurrentItemId(currentItemId+amount)
      return items
    }


  const handleOnClickEvent = (item: ItemModel) => {

    if (props.amountChosen == 0){
      props.setOrderItems(props.orderItems.concat(addItems(item, 1)))
    }
    else{
      props.setOrderItems(props.orderItems.concat(addItems(item, props.amountChosen)))
      props.setAmount(0);
    }
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
                <Card.Header className="unselectable">{item.itemName}</Card.Header>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DisplayItems;
