import { Container } from "react-bootstrap";
import { useState } from "react";
import Bar from "../../resources/LayOutDesign/bar.png";
import Table from "../../resources/LayOutDesign/table.png";
import Plant from "../../resources/LayOutDesign/plant.png";
import "../../resources/Css/ResturantLayout.css";
import BarLayout from "./ResturantLayoutPartials/BarLayout";
import TableLayout from "./ResturantLayoutPartials/TableLayout";
import PlantLayout from "./ResturantLayoutPartials/PlantLayout";
import { ts } from "../../Stores/TableStore";
import Loading from "../../Partials/Loading";
import TableModel from "../../Models/TableModel";

const RestaurantLayout = () => {
  const [tables, setTables] = useState<TableModel[]>([]);

  if (!ts.Tables) {
    return <Loading />;
  } else {
    return (
      <Container className="OverviewLayout">
        <BarLayout image={Bar} />
        {ts.Tables.map((table, index) => (
          <TableLayout tableId={table.id!} image={Table} />
        ))}
        <PlantLayout image={Plant} />
      </Container>
    );
  }
};

export default RestaurantLayout;
