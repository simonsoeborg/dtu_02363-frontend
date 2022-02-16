import { Container, Col, ButtonGroup, Button } from "react-bootstrap"
import { cs } from "../../Stores/CategoryStore";
import { observer } from "mobx-react-lite";
import Loading from "./Loading";

const DisplayCategories = () => {
    if (!cs.Categories) {
        return <Loading />;
      } else {
        return(
            <Container>

                <Col>
                    <ButtonGroup aria-label="Menu Categories">
                    {cs.Categories.map((category, index) => (
                        <Button key={index} variant="secondary">{category.name}</Button>
                    ))}
                    </ButtonGroup>
                </Col>
            </Container>
        )
    }
}

export default observer(DisplayCategories);