import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ts } from "../../../Stores/TableStore";
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
  }

    if (!props.tableIsInUse){
      return(
        <Button variant={`${props.outline}`}
          
          className={`t${props.tableId} border-0 transparent`}
          onClick={() => {
            toOrderPage();
          }}
        >{props.tableId}
        </Button>
        );
    } else {
      return(
        <Button variant={`${props.outline}`}

          className={`t${props.tableId} border-0 transparent-inUse`}
          onClick={() => {
            toOrderPage();
          }}
        >{props.tableId}
        </Button>
        );
    }
  };
export default TableLayout;
