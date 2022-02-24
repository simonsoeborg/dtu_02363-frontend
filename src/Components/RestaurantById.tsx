import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { us } from "../Stores/RestaurantStore";
import { observer } from "mobx-react-lite";
import Loading from "./Partials/Loading";
import { useState } from "react";
import { as } from '../Stores/AdminStore';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

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
        us.setRestaurant(us.Restaurant); 
        us.putResturantAsync();
        as.setActiveKey(2) 
        navigate(`/AdminPanel`)
    }

    const handleDeleteFunction = () => {
        // Todo setup Delete http call 
        navigate(`/AdminPanel`)
    }


    if(!us.Restaurant) {
        return (
            <Loading />
        )
    } else {

        const[show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
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
                                <Form.Control type="text" value={us.Restaurant.restaurantName}
                                onChange={(e) => {
                                    us.setRestaurantName(e.target.value);
                                }} />
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Owner</Form.Label>
                                <Form.Control type="text" defaultValue={us.Restaurant.ownerName } disabled/>
                            </Form.Group>

                            <Button variant="outline-warning" type="submit" onClick={() => handleOnSubmitFunction()}>
                                Confirm
                            </Button>

                            <Button variant="outline-danger" className="deleteModalBtn" onClick={handleShow}>
                                Delete
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                            </Modal>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}   
export default observer(RestaurantById);