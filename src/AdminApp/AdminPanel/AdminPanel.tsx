import { Col, Row, Container, Tab, Nav } from 'react-bootstrap';
import AdminIndex from './AdminIndex';
import AdminUser from '../User/AdminUserList';
import AdminCategoryList from '../Category/AdminCategoryList';
import AdminOrderList from '../Order/AdminOrderList';
import AdminItemList from '../Items/AdminItemList';
import { observer } from "mobx-react-lite";
import { useEffect, useState } from 'react';
import { authentication } from '../../Stores/AuthenticationStore';

const AdminPanel = () => {
    useEffect(() => {
        if(authentication.RBACAuthFullList.length < 1)
            authentication.getAuthenticatedUsersAsync();
    })
    return(
        <div>
            <Container style={{ paddingTop: "2rem" }}>
                <Row>
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
                            <Row>
                                <Col sm={2}>
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="1">Admin Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="2">Manage Items</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="3">Manage Categories</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="4">Manage Users</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="5">Manage Orders</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={10}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="1">
                                            <AdminIndex />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="2">
                                            <AdminItemList />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3">
                                            <AdminCategoryList />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="4">
                                            <AdminUser />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="5">
                                            <AdminOrderList />
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