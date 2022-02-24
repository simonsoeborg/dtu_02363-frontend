import { Container, Row, Form, Button, Col, Dropdown } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { rs } from "../Stores/RestaurantStore";
import { as } from '../Stores/AdminStore';
import { us } from '../Stores/UserStore';
import { observer } from "mobx-react-lite";
import Loading from "./Partials/Loading";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const RestaurantById = () => {

    const { id } = useParams();

    const [hasLoaded, setHasLoaded] = useState(false);
    const [selectedOwner, setOwnerId] = useState(rs.Restaurant.ownerID)

    if(!hasLoaded) {
        rs.getRestaurantByIdAsync(Number(id));
        setHasLoaded(true);
        setOwnerId(rs.Restaurant.ownerID);
    }
    
    
    if(rs.Restaurant.id !== Number(id)) {
        rs.getRestaurantByIdAsync(Number(id))
    }


    // Defines what happens when the user press the confirm/ submit button 
    const navigate = useNavigate();
    const handleOnSubmitFunction = () => {
        rs.setRestaurant(rs.Restaurant); 
        rs.putResturantAsync();
        as.setActiveKey(2) 
        navigate(`/AdminPanel`)
    }

    // Defines what happens when the user press the delete button 
    const handleDeleteFunction = () => {
        // Todo setup Delete http call 
        navigate(`/AdminPanel`)
    }
    
    // Rennderes the remaining users and puts them in a list (Everybody but the current owner)
    const renderOwnerOptions = () => {

        return (
            us.Users.filter(userfilt=>userfilt.id!==rs.Restaurant.ownerID).map((user) => ( 
            <option value = {user.id}>{user.name}</option> )
        ))
    }

     
    if(!rs.Restaurant) {
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
                        <h1 style={{ textAlign: "center"}}> {rs.Restaurant.restaurantName} </h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="number" value={rs.Restaurant.id} disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Restaurant name</Form.Label>
                                <Form.Control type="text" value={rs.Restaurant.restaurantName}
                                onChange={(e) => {
                                    rs.setRestaurantName(e.target.value);
                                }} />
                            </Form.Group>

                            <Form.Label>Restaurant ejer</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={ e=> setOwnerId(parseInt(e.target.value))}>
                                <option value = {rs.Restaurant.ownerID}> {rs.Restaurant.ownerName}</option>
                                {renderOwnerOptions()}
                            </Form.Select>

                            {selectedOwner}
                        
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