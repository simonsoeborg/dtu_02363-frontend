import { Nav } from "react-bootstrap";
import "../../../resources/Css/layout.css";
import Order from "../../Order/Order";

interface IProps {
  tableId: number;
  image: any;
}

const TableLayout = (props: IProps) => {
  return (
    <Nav.Link href="/EasyTap/Order">
      <img className="TableSize" src={props.image}></img>
    </Nav.Link>
  );
};

export default TableLayout;
