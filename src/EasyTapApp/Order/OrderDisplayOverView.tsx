import {
  Container,
  Col,
  ListGroup,
  Row,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { Dispatch, SetStateAction } from "react";
import { is } from "../../Stores/ItemStore";
import Loading from "../../Partials/Loading";
import ItemModel from "../../Models/ItemModel";
import OrderOverviewViewModel from "../../Models/OrderOverviewViewModel";




interface IProps {
  currentOrderItems: ItemModel[];
  setCurrentOrderItems: Dispatch<SetStateAction<ItemModel[]>>;
  amountChosen: number;
  setAmount: Dispatch<SetStateAction<number>>;
  previousOrderItemsView: OrderOverviewViewModel[];
  currentTableId: number;
}

const OrderDisplayOverView = (props: IProps) => {
  function getTotal(): number {
    let result: number = 0;
    let oldResult: number = 0;
    props.currentOrderItems.map((item) => (result = result + item.price));
    props.previousOrderItemsView.map((item) => (oldResult = oldResult + item.price)); 
    return result+oldResult;
  }

  function getQuantity(itemName: String) {
    const quantity = props.currentOrderItems.filter(item => item.itemName === itemName).length;
    return quantity;
  }

  function getQuantityOld(name: String) {
    const quantity = props.previousOrderItemsView.filter(item => item.name === name).length;
    return quantity;
  }


  function getQuantityPrice(item: ItemModel) {
    return item.price * getQuantity(item.itemName);
  }
  
  function getOldQuantityPrice(item: OrderOverviewViewModel) {
    return item.price * getQuantityOld(item.name);
  }


  function getUniqueCurrentOrderItems(currentOrderItems: ItemModel[]){
    const names = currentOrderItems.map(item => item.itemName)
    const filtered = currentOrderItems.filter(({itemName}, index) => !names.includes(itemName, index + 1))
    return filtered;
  }

 function getUniqueOldOrderItems(oldOrderItems: OrderOverviewViewModel[]){
    const names = oldOrderItems.map(item => item.name)
    const filtered = oldOrderItems.filter(({name}, index) => !names.includes(name, index + 1))
    return filtered;
  }


  const handleDeleteItem = (item: ItemModel) => {
    props.setCurrentOrderItems(
      props.currentOrderItems.filter((orderitem) => orderitem.counterId !== item.counterId)
    );
  };


  function displayOrderItems(item: ItemModel, index: number) {
      return(
      <ListGroupItem key={index}>
        <Row >
          <Col md={2}>{getQuantity(item.itemName)}x</Col>
          <Col md={6}>{item.itemName}</Col>
          <Col md={3}>{getQuantityPrice(item)} kr</Col>
          <Col md={1} onClick={() =>  handleDeleteItem(item) }  ><TiDelete color="red"/></Col>
        </Row>
      </ListGroupItem>
      )
  }

  function displayOldOrderItems(item: OrderOverviewViewModel, index: number) {
    return(
    <ListGroupItem variant="dark" key={index}>
      <Row>
        <Col md={2}>{getQuantityOld(item.name)}x</Col>
        <Col md={7}>{item.name}</Col>
        <Col md={2}>{getOldQuantityPrice(item)} kr</Col>
      </Row>
    </ListGroupItem>
    )
}

  if (!is.Items) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Card >
          <Card.Header className="text-center">
            <h4>Order Overview</h4>
            <h5>Table {props.currentTableId}</h5>
          </Card.Header>

          <Card.Body className="customCard-Body">
            <ListGroup className="scrollable-menu scroll1 unselectable">
              {getUniqueCurrentOrderItems(props.currentOrderItems).map((item, index) => (
               displayOrderItems(item, index)
              ))}

              {getUniqueOldOrderItems(props.previousOrderItemsView).map((item, index) => (
               displayOldOrderItems(item, index)
              ))}
            </ListGroup>
          </Card.Body>

          <Card.Footer className="customCard-Footer"><Container className=" totalPrice unselectable"> {getTotal()} kr</Container></Card.Footer>
        </Card>
      </Container>
    );
  }
};

export default OrderDisplayOverView;
