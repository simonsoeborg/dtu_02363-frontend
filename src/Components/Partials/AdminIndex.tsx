import { Container, Row, Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { us } from '../../Stores/UserStore';
import { as } from '../../Stores/AdminStore';
import { observer } from "mobx-react-lite";

const AdminIndex = () => {
    const navigate = useNavigate();

    const handleOnUserCardFunction = () => {
        console.log(as.ActiveKey);
        as.setActiveKey(3);
        console.log(as.ActiveKey);
        navigate("/AdminPanel");
    }

    return (
        <Container>
            <h1>Admin Index</h1>
            <Row>

            </Row>
            <Row style={{ padding: "2rem" }} className="justify-content-md-center">
                <CardGroup>
                    <Card className="CardGroupCardWithOnClick" onClick={() => handleOnUserCardFunction()} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>User Count</Card.Title>
                            <Card.Text>
                                We currently have { us.Users.length } users in our system!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="CardGroupCardWithOnClick" onClick={() => handleOnUserCardFunction()} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>User Count</Card.Title>
                            <Card.Text>
                                We currently have { us.Users.length } users in our system!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="CardGroupCardWithOnClick" onClick={() => handleOnUserCardFunction()} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>User Count</Card.Title>
                            <Card.Text>
                                We currently have { us.Users.length } users in our system!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Row>
        </Container>
    )
}

export default observer(AdminIndex);