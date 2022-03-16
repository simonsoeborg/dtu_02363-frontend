import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { Container } from "react-bootstrap";
import Bar from "../../resources/LayOutDesign/bar.png";
import Table from "../../resources/LayOutDesign/table.png";
import Plant from "../../resources/LayOutDesign/plant.png";
import "../../resources/Css/layout.css";
import BarLayout from "./ResturantLayoutPartials/BarLayout";
import TableLayout from "./ResturantLayoutPartials/TableLayout";
import PlantLayout from "./ResturantLayoutPartials/PlantLayout";

const RestaurantLayout = () => {
  const tableId = 10;

  return (
    <Container className="OverviewLayout">
      <BarLayout image={Bar} />
      <TableLayout tableId={tableId} image={Table} />
      <PlantLayout image={Plant} />
    </Container>
  );
};

export default RestaurantLayout;
