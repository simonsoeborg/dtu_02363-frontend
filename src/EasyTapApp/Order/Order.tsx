import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FaReceipt,FaHandPointer } from "react-icons/fa"
import DisplayCategories from "./OrderDisplayCategories";
import OrderDisplayItems from "./OrderDisplayItems";
import OrderDisplayOverView from "./OrderDisplayOverView";
import CategoryModel from "../../Models/CategoryModel";
import ItemModel from "../../Models/ItemModel";
import OrderModel from "../../Models/OrderModel";
import Loading from "../../Partials/Loading";
import { observer } from "mobx-react-lite";
import TapOutModel from "../../Models/TapOutModel";
import OrderAmountPanel from "./OrderAmountPanel";
import "../../resources/Css/OrderLayout.css";
import OrderInfoModel from "../../Models/OrderInfoModel";
import OrderOverviewViewModel from "../../Models/OrderOverviewViewModel";

// stores
// cs - category store
import { cs } from "../../Stores/CategoryStore";
// is - item store
import { is } from "../../Stores/ItemStore";
// ts - table store
import { ts } from "../../Stores/TableStore";
// os - order store
import { os } from "../../Stores/OrderStore";

const Order = () => {
  // Contains the different categories in the resturant
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

  const tapOutNavigate = () => {
    //TODO Gem data --> PUT (og kun det nye og ikke det gamle loadede.)
    navigate(`/EasyTap`);
  };

  const PrintOutNavigation = async () => {
    //TODO
    // 2. Ændre OrderInfo - status: orderPayed til true!
    await ts.changeTableOccupation();
    await os.putOrderInfo(ts.currentTableId);
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
            <Col className="d-flex justify-content-center">
                <Button
                  className="btn icon-btn azm-social button-PrintBill"
                  variant="outline-primary"
                  onClick={() => PrintOutNavigation()}
                >
                  <i className="fa"><FaReceipt ></FaReceipt></i> Print Bill
                </Button>

                <Button
                  className="btn icon-btn azm-social button-tapOut"
                  variant="outline-primary"
                  onClick={() => {
                    tapOutNavigate();
                  }}
                >
                  <i className="fa"><FaHandPointer></FaHandPointer></i> Tap Out
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
