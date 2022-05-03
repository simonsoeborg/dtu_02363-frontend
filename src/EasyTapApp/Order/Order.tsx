import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaReceipt, FaHandPointer } from "react-icons/fa";
import DisplayCategories from "./OrderDisplayCategories";
import OrderDisplayItems from "./OrderDisplayItems";
import OrderDisplayOverView from "./OrderDisplayOverView";
import CategoryModel from "../../Models/CategoryModel";
import ItemModel from "../../Models/ItemModel";
import Loading from "../../Partials/Loading";
import { observer } from "mobx-react-lite";
import OrderAmountPanel from "./OrderAmountPanel";

// stores
// cs - category store
import { cs } from "../../Stores/CategoryStore";
// is - item store
import { is } from "../../Stores/ItemStore";
// ts - table store
import { ts } from "../../Stores/TableStore";
// os - order store
import { os } from "../../Stores/OrderStore";
import { ConstructionOutlined } from "@mui/icons-material";

const Order = () => {
  // Contains the different categories in the Restaurant
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  // Tells which food-category is chosen.
  const [selectedCategory, setSelectedCategory] = useState<String>("Starters");
  // Tells if the needed data i loaded
  const [hasLoaded, setHasLoaded] = useState(false);
  // Contains the different items on the menu
  const [items, setItems] = useState<ItemModel[]>([]);
  //Contains the items for the current order
  const [orderItems, setOrderItems] = useState<ItemModel[]>([]);
  // Shows amount chosen on calculator
  const [AmountChosen, setAmount] = useState(0);

  const navigate = useNavigate();

  const tapOutNavigate = async() => {

    if (orderItems.length > 0){
      await os.postOrders(orderItems, os.OrderInfoSpecific.id)
    }

    os.setOrderViewList([])
    navigate(`/EasyTap`);
  };

  const PrintOutNavigation = async () => {
    //TODO: 
    // Pop that shows price - mby a check: "Do you clear this table?"

    if (orderItems.length > 0){
      await os.postOrders(orderItems, os.OrderInfoSpecific.id)
    }
   
    await os.changeOrderInfoStatus(ts.currentTableId);
    await ts.changeTableOccupation();
    os.setOrderViewList([])
    navigate(`/EasyTap`);
  };

  // UseEffect is used for securing that the functions is called in proper order and only onces, unless called again.
  useEffect(() => {
    // TODO - de to const i useEffect burde efsersigne være i sepperate useEffects.

    // TODO + OBS OBS: fetchdata (eller et andet sted) skal tage højde for hvis et bord er optaget, men ikke har nogen varer.
    const fetchData = async () => {
      // Fetches the current order-id based on the which Table was pressed.
      await os.getSpecificOrderInfoAsync(ts.currentTableId);
      // Uses the knowledege from previous function to get all excisting orders from the id.
      await os.getOrderViewAsync(os.orderInfoSpecific.id);
    };

    const newTable = async () => {
      // TODO: - opret en instans af orderInfo i database.
      await ts.changeTableOccupation();
      await os.postOrderInfo(ts.currentTableId);
      await os.getSpecificOrderInfoAsync(ts.currentTableId);
      //await os.getSpecificOrderInfoAsync(ts.currentTableId);
    };

    if (ts.tableIsInUse) {
      fetchData();
    } else {
      newTable();
    }

    setCategories(cs.categories);
    setItems(is.items);
    setHasLoaded(true);
    // console.log(os.orderInfoSpecific.id)
  }, []);

  if (!hasLoaded) {
    return <Loading />;
  }
  return (
    <Container fluid>
      <Row>
        <Col md={9}>
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
        <Col md={3}>
          <Row>
            <OrderDisplayOverView
              currentOrderItems={orderItems}
              setCurrentOrderItems={setOrderItems}
              amountChosen={AmountChosen}
              setAmount={setAmount}
              previousOrderItemsView={os.OrderViews}
              currentTableId={ts.currentTableId}
            />
            <Col className="d-flex justify-content">
                <Button
                  className="btn icon-btn azm-social button-PrintBill"
                  variant="outline-primary"
                  onClick={() => PrintOutNavigation()}
                >
                  <i className="fa">
                    <FaReceipt></FaReceipt>
                  </i>{" "}
                  Print Bill
                </Button>

                <Button
                  className="btn icon-btn azm-social button-tapOut"
                  variant="outline-primary"
                  onClick={() => {
                    tapOutNavigate();
                  }}
                >
                  <i className="fa">
                    <FaHandPointer></FaHandPointer>
                  </i>{" "}
                  Tap Out
                </Button>
            </Col>
              <OrderAmountPanel
                amountChosen={AmountChosen}
                setAmount={setAmount}
              />
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
