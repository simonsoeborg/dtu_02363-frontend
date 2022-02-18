import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { us } from "../Stores/UserStore";
import { observer } from "mobx-react-lite";
import Loading from "./Partials/Loading";
import { useState } from "react";
import { as } from '../Stores/AdminStore';

const UserById = () => {

    const { id } = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);

    if(!hasLoaded) {
        us.getUserByIdAsync(Number(id));
        setHasLoaded(true);
    }

    if(us.User.id !== Number(id)) {
        us.getUserByIdAsync(Number(id))
    }

    const navigate = useNavigate();

    const handleOnSubmitFunction = () => {
        us.setUser(us.User);
        us.putUserAsync();
        as.setActiveKey(3);
        navigate(`/AdminPanel`)
    }

    if(!us.User) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={6} md={6} lg={4}>
                        <h1 style={{ textAlign: "center"}}> {us.User.name} </h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="number" value={us.User.id} disabled/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={us.User.name}
                                onChange={(e) => {
                                    us.setUserName(e.target.value);
                                }}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Role</Form.Label>
                                <Form.Control type="text" defaultValue={us.User.role} 
                                onChange={(e) => {
                                    us.setUserRole(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Created</Form.Label>
                                <Form.Control type="text" value={us.User.createdAt} disabled/>
                            </Form.Group>

                            <Button variant="outline-warning" type="submit" onClick={() => handleOnSubmitFunction()}>
                                Confirm
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
    
}

export default observer(UserById);