import { Container, ListGroup, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";
import Bar from "../../resources/LayOutDesign/bar.png";
import Table from "../../resources/LayOutDesign/table.png";
import Ellipse from "../../resources/LayOutDesign/Ellipse.png"
import TableUsing from "../../resources/LayOutDesign/TableUsing.png";
import OccupiedTable from "../../resources/LayOutDesign/OccupiedTable.png";
import Plant from "../../resources/LayOutDesign/plant.png";
import "../../resources/Css/RestaurantLayout.css";
import BarLayout from "./RestaurantLayoutPartials/BarLayout";
import TableLayout from "./RestaurantLayoutPartials/TableLayout";
import PlantLayout from "./RestaurantLayoutPartials/PlantLayout";
import { ts } from "../../Stores/TableStore";
import Loading from "../../Partials/Loading";
import TableModel from "../../Models/TableModel";
import { height } from "@mui/system";

const RestaurantLayout = () => {
  // const [tables, setTables] = useState<TableModel[]>([]);

  function displayTable(index: number) {
    console.log("PRINT OF tables in use : " + ts.tables[index - 1].isInUse)
    if (!ts.tables[index - 1].isInUse) {
      return (
          <TableLayout
            tableId={index}
            image={Table}
            tableIsInUse={ts.tables[index - 1].isInUse}
          />
      );
    } else {
      return (
          <TableLayout
            tableId={index}
            image={Ellipse}
            tableIsInUse={ts.tables[index - 1].isInUse}
          />
      );
    }
  }
  if (!ts.tables) {
    return <Loading />;
  } else {
    return (
      <Container
        style={{ height: "53rem" }}
        className="OverviewLayout justify-content-space-around"
      >
          {displayTable(1)}

          {displayTable(2)}


          {displayTable(3)}

          {displayTable(4)}

          {displayTable(5)}
      </Container>
    );
  }
};

export default RestaurantLayout;
