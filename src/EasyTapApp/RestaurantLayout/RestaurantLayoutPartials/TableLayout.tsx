import { Nav, Card, Button } from "react-bootstrap";
import "../../../resources/Css/RestaurantLayout.css";
import { useNavigate } from "react-router-dom";
import { ts } from "../../../Stores/TableStore";
import { os } from "../../../Stores/OrderStore";
import OccupiedTable from "../../resources/LayOutDesign/OccupiedTable.png";
import Table from "../../resources/LayOutDesign/table.png";
interface IProps {
  tableId: number;
  tableIsInUse: boolean;
  outline: string;
}

const TableLayout = (props: IProps) => {
  const navigate = useNavigate();

  const toOrderPage = () => {
    ts.currentTableId = props.tableId;
    ts.tableIsInUse = props.tableIsInUse;
    

    navigate(`/EasyTap/Order/${props.tableId}`);
  };

    return(
    <Button variant={`${props.outline}`}

      className={`t${props.tableId} border-0`}
      onClick={() => {
        toOrderPage();
      }}
    >{props.tableId}
    </Button>
    );
  };

    // <Card
    //   className="bg-transparent text-white border-0"
    //   style={{ width: "180px" }}
    //   onClick={() => {
    //     toOrderPage();
    //   }}
    // >
    //   <Card.Img src={props.image} />
    //   <Card.ImgOverlay className="TableAlignment">
    //     <Card.Title className="TableText">{props.tableId}</Card.Title>
    //   </Card.ImgOverlay>
    // </Card>


export default TableLayout;
