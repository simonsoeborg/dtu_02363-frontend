import { Col, Container, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { us } from '../../Stores/UserStore';
import { as } from '../../Stores/AdminStore';
import { observer } from "mobx-react-lite";

const AdminIndex = () => {
    const navigate = useNavigate();

    const handleOnUserCardFunction = () => {
        as.setActiveKey(3);
        navigate("/AdminPanel");
    }

    return (
        <Container>
            <h1>Admin Index</h1>
            <Row>

            </Row>
            <Col>
            <Card onClick={() => handleOnUserCardFunction()} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>User Count</Card.Title>
                    <Card.Text>
                        We currently have { us.Users.length } in our system!
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Container>
    )
}

export default observer(AdminIndex);