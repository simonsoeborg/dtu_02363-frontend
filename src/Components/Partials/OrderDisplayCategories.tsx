import { Container, Col, ButtonGroup, Button, Nav } from "react-bootstrap";
import { cs } from "../../Stores/CategoryStore";
import { observer } from "mobx-react-lite";
import Loading from "./Loading";

const DisplayCategories = () => {
  if (!cs.Categories) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Nav fill variant ="tabs" defaultActiveKey="">
          {cs.Categories.map((category, index) => (
            <Nav.Item>
              <Nav.Link eventKey={category.name}>{category.name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    );
  }
};

export default observer(DisplayCategories);
