import { Container, ListGroup, Col, Row } from "react-bootstrap";
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
        <Row>
          <Col xs="3">
            <BarLayout image={Bar} />
          </Col>
          <Col xs="1"></Col>
          <Col xs="2">
            <TableLayout tableId={1} image={Table} />
          </Col>
          <Col xs="1">
            <PlantLayout image={Plant} />
          </Col>
          <Col xs="2">
            <TableLayout tableId={2} image={Table} />
          </Col>
        </Row>
        <Row>
          <Col xs="2">
            <TableLayout tableId={3} image={Table} />
          </Col>
          <Col xs="1">
            <PlantLayout image={Plant} />
          </Col>

          <Col xs="2">
            <TableLayout tableId={4} image={Table} />
          </Col>
          <Col xs="1">
            <PlantLayout image={Plant} />
          </Col>
          <Col xs="2">
            <TableLayout tableId={5} image={Table} />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default RestaurantLayout;
