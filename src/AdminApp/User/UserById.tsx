import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { urs } from "../../Stores/UserRolesStore";
import { observer } from "mobx-react-lite";
import Loading from "../../Partials/Loading";
import { useState } from "react";
import { as } from '../../Stores/AdminStore';

const UserById = () => {

    const { id } = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);

    if(!hasLoaded) {
        urs.getUserByIdAsync(Number(id));
        setHasLoaded(true);
    }

    if(urs.User.id !== Number(id)) {
        urs.getUserByIdAsync(Number(id))
    }

    const navigate = useNavigate();

    const handleOnSubmitFunction = () => {
        urs.setUser(urs.User);
        urs.putUserAsync();
        as.setActiveKey(3);
        navigate(`/AdminPanel`)
    }

    if(!urs.User) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={6} md={6} lg={4}>
                        <h1 style={{ textAlign: "center"}}> {urs.User.name} </h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="number" value={urs.User.id} disabled/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={urs.User.name}
                                onChange={(e) => {
                                    urs.setUserName(e.target.value);
                                }}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Role</Form.Label>
                                <Form.Control type="text" defaultValue={urs.User.roles} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Created</Form.Label>
                                <Form.Control type="text" value={urs.User.createdAt} disabled/>
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