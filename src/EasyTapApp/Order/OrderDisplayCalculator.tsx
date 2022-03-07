import { Container, Col, Card, Row } from "react-bootstrap";
import { is } from "../../Stores/ItemStore";
import { observer } from "mobx-react-lite";
import Loading from "../../Partials/Loading";

const OrderDisplayCalculator = () => {
  if (!is.Items) {
    return <Loading />;
  } else {
    return (
      <Container>
      </Container>
    );
  }
};

export default observer(OrderDisplayCalculator);
