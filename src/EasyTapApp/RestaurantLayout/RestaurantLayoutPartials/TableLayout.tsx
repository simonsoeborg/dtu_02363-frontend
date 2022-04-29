import { Nav, Card, Button } from "react-bootstrap";
import "../../../resources/Css/RestaurantLayout.css";
import { useNavigate } from "react-router-dom";
import { ts } from "../../../Stores/TableStore";
import { os } from "../../../Stores/OrderStore";
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

export default TableLayout;

