import { Col, Row, Container, Tab, Nav } from 'react-bootstrap';
import AdminRestaurant from './AdminRestaurant';
import AdminIndex from './AdminIndex';
import AdminUser from './AdminUserList';
import { observer } from "mobx-react-lite";
import { useState } from 'react';

const AdminPanel = () => {
    const [activeKey, setActiveKey] = useState(1);

    return(
        <div>
            <Container style={{ paddingTop: "2rem" }}>
                <Row>
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey={activeKey}>
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
                                            <AdminIndex activeKey={activeKey} setActiveKey={setActiveKey} />
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

export default observer(AdminPanel);