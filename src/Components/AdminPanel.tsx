import { Col, Row, Container, Tab, Nav } from 'react-bootstrap';
import AdminRestaurant from './Partials/AdminRestaurant';
import AdminIndex from './Partials/AdminIndex';
import AdminUser from './Partials/AdminUser';

const AdminPanel = () => {

    return(
        <div>
            <Container style={{ paddingTop: "2rem" }}>
                <Row>
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                            <Row>
                                <Col sm={4}>
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                        <Nav.Link eventKey="1">Admin Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="2">Manage Restaurants</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="3">Manage Users</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="1">
                                            <AdminIndex />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="2">
                                            <AdminRestaurant />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3">
                                            <AdminUser />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default AdminPanel;