import { Nav, Card } from "react-bootstrap";
import "../../../resources/Css/ResturantLayout.css";
import Order from "../../Order/Order";
import { useNavigate } from "react-router-dom";
interface IProps {
  tableId: number;
  image: any;
}

const TableLayout = (props: IProps) => {
  const navigate = useNavigate();

  const toOrderPage = () => {
    navigate("/EasyTap/Order");
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
      <Card.ImgOverlay>
        <Card.Title>{props.tableId}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default TableLayout;
