import { Container } from "react-bootstrap";
import TableLayout from "./RestaurantLayoutPartials/TableLayout";
import { ts } from "../../Stores/TableStore";
import Loading from "../../Partials/Loading";

const RestaurantLayout = () => {
  // const [tables, setTables] = useState<TableModel[]>([]);

  function displayTable(index: number) {
    console.log("PRINT OF tables in use : " + ts.tables[index - 1].isInUse)
    if (!ts.tables[index - 1].isInUse) {
      return (
          <TableLayout
            tableId={index}
            outline={"outline-light"}
            tableIsInUse={ts.tables[index - 1].isInUse}
          />
      );
    } else {
      return (
          <TableLayout
            tableId={index}
            outline={"outline-warning"}
            tableIsInUse={ts.tables[index - 1].isInUse}
          />
      );
    };
  };

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

          {displayTable(6)}

          {displayTable(7)}

          {displayTable(8)}

          {displayTable(9)}

          {displayTable(10)}


      </Container>
    );
  }
};

export default RestaurantLayout;
