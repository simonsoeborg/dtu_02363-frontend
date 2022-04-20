import { Nav, Card } from "react-bootstrap";
import "../../../resources/Css/ResturantLayout.css";
import { useNavigate } from "react-router-dom";
import { ts } from "../../../Stores/TableStore";
import { os } from "../../../Stores/OrderStore";
interface IProps {
  tableId: number;
  tableIsInUse: boolean; 
  image: any;
}

const TableLayout = (props: IProps) => {
  const navigate = useNavigate();

  const toOrderPage = () => {
    ts.currentTableId = props.tableId;
    ts.tableIsInUse = props.tableIsInUse;
  
    navigate(`/EasyTap/Order/${props.tableId}`);
  };

  return (
    <Card
      className="bg-transparent text-white"
      style={{ width: "180px" }}
      onClick={() => {
        toOrderPage();
      }}
    >
      <Card.Img src={props.image} className="TableSize" />
      <Card.ImgOverlay className="TableAlignment">
        <Card.Title className="TableText">{props.tableId}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default TableLayout;
