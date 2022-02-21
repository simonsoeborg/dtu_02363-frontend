import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { us } from "../Stores/RestaurantStore";
import { observer } from "mobx-react-lite";
import Loading from "./Partials/Loading";
import { useState } from "react";
import { as } from '../Stores/AdminStore';

const RestaurantById = () => {

    const { id } = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);

    if(!hasLoaded) {
        us.getRestaurantByIdAsync(Number(id));
        setHasLoaded(true);
    }

    if(us.Restaurant.id !== Number(id)) {
        us.getRestaurantByIdAsync(Number(id))
    }

    const navigate = useNavigate();

    const handleOnSubmitFunction = () => {
        navigate(`/AdminPanel`)
    }

    if(!us.Restaurant) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={6} md={6} lg={4}>
                        <h1 style={{ textAlign: "center"}}> {us.Restaurant.restaurantName} </h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="number" value={us.Restaurant.id} disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Restaurant name</Form.Label>
                                <Form.Control type="text" value={us.Restaurant.restaurantName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Owner</Form.Label>
                                <Form.Control type="text" defaultValue={us.Restaurant.ownerName } disabled/>
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

export default observer(RestaurantById);