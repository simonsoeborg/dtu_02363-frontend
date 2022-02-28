import { Container, Col, ListGroup, Row, ListGroupItem, Card } from "react-bootstrap";
import { is } from "../../Stores/ItemStore";
import { observer } from "mobx-react-lite";
import Loading from "../../Partials/Loading";
import ItemModel from "../../Models/ItemModel";


const OrderDisplayOverView = () => {
    const orderData: ItemModel[] = [];
    
    function getTotal(): number {
        var result: number = 0;
        orderData.map(item => (
          result = result + item.price
        ));
        return result;
      }
    for(let i=0; i<10; i++){
        const item = new ItemModel();
        item.id = i;
        item.categoryName = "Main Dishes"
        item.price = i*30;
        item.itemName = "Pizza"+i;
        orderData.push(item);
    }
     


  if (!is.Items) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Card>
            <Card.Header>
            <h2>Order Overview</h2>
            </Card.Header>
            <Card.Body>
                <ListGroup >
                    {orderData.map((item,index) => (
                        <ListGroupItem key={index} >
                        <Row>
                            <Col md="auto">1x</Col>
                            <Col md={8}>{item.itemName}</Col>
                            <Col md="auto">{item.price}</Col> 
                        </Row>
                    </ListGroupItem>
                    ))}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                Total : {getTotal()}
            </Card.Footer>
        </Card>
      </Container>
    );
  }
};

export default observer(OrderDisplayOverView);
