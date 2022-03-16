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
  const barTitle = "Bar Title";

  const tableId = "Hent fra API tableId for hvert table tables.map().";
  const tableImage = "tableImage";

  return (
    <Container className="OverviewLayout">
      <BarLayout title={barTitle} image={Bar} />
      <TableLayout title={barTitle} image={Table} />
      <PlantLayout title={barTitle} image={Plant} />
    </Container>
  );
};

export default RestaurantLayout;
