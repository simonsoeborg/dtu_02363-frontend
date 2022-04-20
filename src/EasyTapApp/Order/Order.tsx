import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import DisplayCategories from "./OrderDisplayCategories";
import OrderDisplayItems from "./OrderDisplayItems";
import OrderDisplayOverView from "./OrderDisplayOverView";
import CategoryModel from "../../Models/CategoryModel";
import ItemModel from "../../Models/ItemModel";
import OrderModel from "../../Models/OrderModel";
import { cs } from "../../Stores/CategoryStore";
import { is } from "../../Stores/ItemStore";
import { ts } from "../../Stores/TableStore";
import { os } from "../../Stores/OrderStore";
import Loading from "../../Partials/Loading";
import { observer } from "mobx-react-lite";
import TapOutModel from "../../Models/TapOutModel";
import OrderAmountPanel from "./OrderAmountPanel";
import "../../resources/Css/OrderLayout.css";
import OrderInfoModel from "../../Models/OrderInfoModel";
import OrderOverviewViewModel from "../../Models/OrderOverviewViewModel";

//Hardcoded tableNumber, but should get tableNumber from an onClick function earlier.
const Order = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<String>("Starters");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [items, setItems] = useState<ItemModel[]>([]);


  const navigate = useNavigate();
  const tapOutNavigate = () => {
    navigate(`/EasyTap`);
  };

  const PrintOutNavigation = () => {
    navigate(`/EasyTap`);
  };

  //const containing the current order
  const [order, setOrder] = useState<OrderModel>(new OrderModel());
  //const containing the items for the current order
  const [orderItems, setOrderItems] = useState<ItemModel[]>([]);

  const [previusItemsView, setpreviousItemsView] = useState<OrderOverviewViewModel[]>([]);
  const [AmountChosen, setAmount] = useState(0);
  const [isPayed, setIsPayed] = useState(false);

  useEffect(() => {

    const fetchData = async() => {
      await os.getSpecificOrderInfoAsync(ts.currentTableId)
      await os.getOrderViewAsync(os.orderInfoSpecific.id)
      console.log(os.OrderViews[0].name);

      setCategories(cs.categories)
      setItems(is.items)
      setHasLoaded(true);
    } 
    fetchData() 
  },[])

  if (!hasLoaded) {
    return <Loading />
  }



  return (
    <Container fluid>
      <Row md="auto">
        <h1>Table {ts.currentTableId} </h1>
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
              amountChosen={AmountChosen}
              setAmount={setAmount}
              previousOrderItemsView={os.OrderViews}
            />
            <Col>
              <OrderAmountPanel
                amountChosen={AmountChosen}
                setAmount={setAmount}
              />
            </Col>
            <Col>
              <Row className="d-flex justify-content-center">
                <Button
                  className="button-PrintBill"
                  variant="outline-primary"
                  onClick={() => PrintOutNavigation()}
                >
                  Print Bill
                </Button>

                <Button
                  className="button-tabOut"
                  variant="outline-primary"
                  onClick={() => {
                    tapOutNavigate();
                  }}
                >
                  Tap Out
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};



// Funktion til at gemme en midlertidig ordre som vises i OrderDisplayOverView
// const CreateTempOrder = (
//   tempOrder: TapOutModel,
//   item: ItemModel,
//   calculatorValue: number,
//   tableNr: number,
//   orders: TapOutModel
// ) => {
//   tempOrder.name = item.itemName;
//   tempOrder.price = item.price;
//   tempOrder.quantity = calculatorValue;
//   tempOrder.tableId = tableNr;
//   tempOrder.ordreId = orders.ordreId;
// };

export default observer(Order);
