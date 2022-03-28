import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DisplayCategories from "./OrderDisplayCategories";
import OrderDisplayItems from "./OrderDisplayItems";
import OrderDisplayOverView from "./OrderDisplayOverView";
import CategoryModel from "../../Models/CategoryModel";
import ItemModel from "../../Models/ItemModel";
import OrderModel from "../../Models/OrderModel";
import { cs } from "../../Stores/CategoryStore";
import { is } from "../../Stores/ItemStore";
import { ts } from "../../Stores/TableStore";
import Loading from "../../Partials/Loading";
import { observer } from "mobx-react-lite";
import TapOutModel from "../../Models/TapOutModel";
import OrderAmountPanel from "./OrderAmountPanel";
import PrintBillButton from "./PrintBillButton";
import TapOutButton from "./TapOutButton";
import TableModel from "../../Models/TableModel";

//Hardcoded tableNumber, but should get tableNumber from an onClick function earlier.
const Order = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<String>("Starters");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [items, setItems] = useState<ItemModel[]>([]);
  const { id } = useParams();

  // const containing the current order
  const [order, setOrder] = useState<OrderModel>(new OrderModel());
  // const containing the items for the current order
  const [orderItems, setOrderItems] = useState<ItemModel[]>([]);
  //
  const [AmountChosen, setAmount] = useState(0);
  const [isPayed, setIsPayed] = useState(false);

  if (!cs.Categories && !is.Items && !ts.Tables) {
    return <Loading />;
  } else {
    if (cs.Categories.length > 0 && is.Items.length > 0) {
      if (!hasLoaded) {
        const orderData: ItemModel[] = [];
        const dummy_order = new OrderModel();
        dummy_order.id = 1;
        dummy_order.items = orderData;
        //console.log(ts.Table.id!);
        dummy_order.tableId = ts.currentTableId;
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
                amountChosen={AmountChosen}
                setAmount={setAmount}
              />
            </Row>
          </Col>
          <Col>
            <Row>
              <OrderDisplayOverView
                currentOrderItems={orderItems}
                setCurrentOrderItems={setOrderItems}
              />
              <Col>
                <OrderAmountPanel
                  amountChosen={AmountChosen}
                  setAmount={setAmount}
                />
              </Col>
              <Col>
                <Row className="d-flex justify-content-center">
                  <PrintBillButton
                    printbutton={isPayed}
                    setPrintOut={setIsPayed}
                  />
                  <TapOutButton />
                </Row>
              </Col>
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
