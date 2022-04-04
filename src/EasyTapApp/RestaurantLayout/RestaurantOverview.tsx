import { Container, ListGroup, Col, Row } from "react-bootstrap";
import { useState } from "react";
import Bar from "../../resources/LayOutDesign/bar.png";
import Table from "../../resources/LayOutDesign/table.png";
import TableUsing from "../../resources/LayOutDesign/TableUsing.png";
import Plant from "../../resources/LayOutDesign/plant.png";
import "../../resources/Css/ResturantLayout.css";
import BarLayout from "./ResturantLayoutPartials/BarLayout";
import TableLayout from "./ResturantLayoutPartials/TableLayout";
import PlantLayout from "./ResturantLayoutPartials/PlantLayout";
import { ts } from "../../Stores/TableStore";
import Loading from "../../Partials/Loading";
import TableModel from "../../Models/TableModel";
import { height } from "@mui/system";

const RestaurantLayout = () => {
  const [tables, setTables] = useState<TableModel[]>([]);


  function displayTable(index : number){

    if (!ts.tables[index-1].isInUse){
   return(
    <Col xs="2">
    <TableLayout tableId={index} image={Table} tableStatus={ts.tables[index-1].isInUse}/>
    </Col>
   )
    }
   else{
     return(
      <Col xs="2">
      <TableLayout tableId={index} image={TableUsing} tableStatus={ts.tables[index-1].isInUse}/>
      </Col>
     )
   }
}
  if (!ts.Tables) {
    return <Loading />;
  } else {
    return (
      <Container
        style={{ height: "53rem" }}
        className="OverviewLayout justify-content-space-around"
      >
        <Row>
          <Col xs="3">
            <BarLayout image={Bar} />
          </Col>
          <Col xs="1"></Col>
         {displayTable(1)}
          <Col xs="1">
            <PlantLayout image={Plant} />
          </Col>
          {displayTable(2)}
        </Row>
        <Row
          style={{ marginTop: "23rem" }}
          className="d-flex align-items-end flex-Row justify-content-md-center">
          {displayTable(3)}
          <Col xs="1">
            <PlantLayout image={Plant} />
          </Col>
          {displayTable(4)}
          <Col xs="1">
            <PlantLayout image={Plant} />
          </Col>
          {displayTable(5)}
        </Row>
      </Container>
    );
  }
};

export default RestaurantLayout;
