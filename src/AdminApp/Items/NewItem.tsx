import { observer } from "mobx-react-lite"
import { useState } from "react"
import { Col, Container, Form, Row, Image, InputGroup, Button, Modal } from "react-bootstrap"
import ItemPostModel from "../../Models/ItemPostModel"
import { cs } from '../../Stores/CategoryStore'
import { is } from "../../Stores/ItemStore"

const NewItem = () => {
    const [imageUrl, setImageUrl] = useState("https://www.happyeater.com/images/default-food-image.jpg");
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [category, setCategory] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [hasLoaded, setHasLoaded] = useState(false);

    const handleImagePreview = () => {
        if(imageUrl !== null || imageUrl !== "") {
            handleShow()
        }
    }

    const onSubmit = () => {
        if(!hasLoaded) {
            // Pack to ItemPostModel
            is.setPostItem(new ItemPostModel(
                0,
                itemName,
                itemPrice,
                Number(category),
                imageUrl
            ));
            is.postItemModel(is.PostItem);
            setHasLoaded(true);
        }
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <h1>New Item</h1>
                <Col md="4">
                    <Row className="justify-content-center">
                        <Col md="8">
                        <Image src={imageUrl} fluid />
                        </Col>
                        <Row className="justify-content-center">
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body>
                                <Image src={imageUrl} fluid/>
                            </Modal.Body>
                        </Modal>
                        </Row>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group className="mb-3" controlId="newItemName">
                                <Form.Label>Item</Form.Label>
                                <Form.Control type="text" placeholder="Enter Item Name"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const newVal = e.currentTarget.value;
                                    setItemName(newVal);
                                  }}></Form.Control>
                                <Form.Text className="text-muted">Preferably a shortened name easy to identify.</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="newItemPrice">
                                <Form.Label>Price</Form.Label>
                                <InputGroup className="mb-3">
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control type="text" placeholder="Enter Price"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const newVal = e.currentTarget.value;
                                    setItemPrice(Number(newVal));
                                  }}></Form.Control>
                                <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup>
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="newItemCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        const newVal = e.currentTarget.value;
                                        setCategory(Number(newVal));
                                      }}>
                                    { cs.Categories.map((category, index) => (
                                        <option key={index} value={category.id}>{category.name}</option>
                                    ))}
                                </Form.Control>
                                <Form.Text className="text-muted">Place your new item into a category.</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="newItemImageUrl">
                                <Form.Label>Image Url</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control type="text" placeholder="Insert Image URL" 
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        const newVal = e.currentTarget.value;
                                        setImageUrl(newVal);
                                      }}></Form.Control>
                                    <Button variant="outline-secondary" onClick={() => handleImagePreview()}>Preview</Button>
                                </InputGroup>
                            </Form.Group>
                            <Button variant="outline-success" onClick={() => onSubmit()}>
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default observer(NewItem);