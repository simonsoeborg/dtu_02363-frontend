import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OrderDisplayCalculator from "./OrderDisplayCalculator";
import DisplayCategories from "./OrderDisplayCategories";
import OrderDisplayItems from "./OrderDisplayItems";
import OrderDisplayOverView from "./OrderDisplayOverView";
import CategoryModel from "../../Models/CategoryModel";
import ItemModel from "../../Models/ItemModel";
import OrderModel from "../../Models/OrderModel";
import { cs } from "../../Stores/CategoryStore";
import { is } from "../../Stores/ItemStore";
import { os } from "../../Stores/OrderStore";
import Loading from "../../Partials/Loading";
import { observer } from "mobx-react-lite";
import TapOutModel from "../../Models/TapOutModel";

//Hardcoded tableNumber, but should get tableNumber from an onClick function earlier.
const Order = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<String>("Starters");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [tableNr, setTableNr] = useState(0);
  const [items, setItems] = useState<ItemModel[]>([]);

  // const containing the current order
  const [order, setOrder] = useState<OrderModel>(new OrderModel());
  // const containing the items for the current order
  const [orderItems, setOrderItems] = useState<ItemModel[]>([]);

  if (!cs.Categories && !is.Items) {
    return <Loading />;
  } else {
    if (cs.Categories.length > 0 && is.Items.length > 0) {
      if (!hasLoaded) {
        const orderData: ItemModel[] = [];
        const dummy_order = new OrderModel();
        dummy_order.id = 1;
        dummy_order.items = orderData;
        dummy_order.tableId = 5;
        dummy_order.orderPlaced = "";
        dummy_order.orderFinished = "";
        setHasLoaded(true);
        setCategories(cs.Categories);
        setItems(is.Items);
        setOrder(dummy_order);
        setOrderItems(dummy_order.items);
      }
    }

    return (
      <Container fluid>
        <Row md="auto">
          <h1>Table {order.tableId} </h1>
        </Row>
        <Row>
          <Col md={8}>
            <Row>
              <DisplayCategories
                categories={categories}
                setSelectedCategory={setSelectedCategory}
              />
            </Row>
            <br></br>
            <Row>
              <OrderDisplayItems
                items={items}
                setItems={setItems}
                selectedCategory={selectedCategory}
                orderItems={orderItems}
                setOrderItems={setOrderItems}
              />
            </Row>
          </Col>
          <Col>
            <Row>
              <OrderDisplayOverView currentOrder={orderItems} />
            </Row>
          </Col>
          <Col>
            <Row>
              <OrderDisplayCalculator />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

// Funktion til at gemme en midlertidig ordre som vises i OrderDisplayOverView
const CreateTempOrder = (
  tempOrder: TapOutModel,
  item: ItemModel,
  calculatorValue: number,
  tableNr: number,
  orders: TapOutModel
) => {
  tempOrder.name = item.itemName;
  tempOrder.price = item.price;
  tempOrder.quantity = calculatorValue;
  tempOrder.tableId = tableNr;
  tempOrder.ordreId = orders.ordreId;
};

export default observer(Order);
