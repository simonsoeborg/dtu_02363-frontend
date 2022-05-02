import { observer } from "mobx-react-lite"
import { useState } from "react";
import { Col, Container, Row, Image, Modal, Form, InputGroup, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import { cs } from '../../Stores/CategoryStore'
import { is } from "../../Stores/ItemStore"
import Loading from '../../Partials/Loading';
import ItemPostModel from "../../Models/ItemPostModel";

const ItemById = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [hasLoaded, setHasLoaded] = useState(false);
    const [putReady, setputReady] = useState(false);

    if(!hasLoaded) {
        if(is.PostItem.id === undefined) {
            setTimeout(() => {
                is.getItemByIdAsync(Number(id));
            }, 500)
        } else {
            is.setPostItem(new ItemPostModel(0, "", 0, 0, ""));
            setTimeout(() => {
                is.getItemByIdAsync(Number(id));
            }, 500)
        }
        setHasLoaded(true);
    }
    
    const handleImagePreview = () => {
        if(is.PostItem.imgUrl !== null || is.PostItem.imgUrl !== "") {
            handleShow()
        }
    }

    const onSubmit = () => {
        if(!putReady) {
            // Pack to ItemPostModel
            setputReady(true);
            is.putItemModel(is.PostItem);
            navigate(-1);
        }
    }

    if((is.PostItem.id === undefined || is.PostItem.id === 0) && (is.PostItem.name === "" || is.PostItem.name === null) && (is.PostItem.price === 0 || is.PostItem.price === undefined)){
        return <Loading />
    } else {
/*         console.log(is.PostItem.id)
        console.log(is.PostItem.name)
        console.log(is.PostItem.price)
        console.log(is.PostItem.imgUrl)
        console.log(is.PostItem.categoryId) */

    return (
        <Container>
            <Row className="justify-content-center">
                <h1>Edit Item</h1>
                <Col md="4">
                    <Row className="justify-content-center">
                        <Col md="8">
                        <Image src={is.PostItem.imgUrl} fluid />
                        </Col>
                        <Row className="justify-content-center">
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body>
                                <Image src={is.PostItem.imgUrl} fluid/>
                            </Modal.Body>
                        </Modal>
                        </Row>
                    </Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="newItemName">
                            <Form.Label>Item</Form.Label>
                            <Form.Control type="text" placeholder="Enter Item Name" defaultValue={is.PostItem.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const newVal = e.currentTarget.value;
                                is.setPostItemName(newVal);
                                }}></Form.Control>
                            <Form.Text className="text-muted">Preferably a shortened name easy to identify.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newItemPrice">
                            <Form.Label>Price</Form.Label>
                            <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control type="text" defaultValue={is.PostItem.price}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const newVal = e.currentTarget.value;
                                is.setPostItemPrice(Number(newVal));
                                }}></Form.Control>
                            <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newItemCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const newVal = e.currentTarget.value;
                                    is.setPostItemCategoryId(Number(newVal));
                                    }} defaultValue={is.PostItem.categoryId}>
                                { cs.Categories.map((category, index) => (
                                    <option key={index} value={category.id}>{category.name}</option>
                                ))}
                            </Form.Control>
                            <Form.Text className="text-muted">Place your new item into a category.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newItemImageUrl">
                            <Form.Label>Image Url</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control type="text" placeholder="Insert Image URL" defaultValue={is.PostItem.imgUrl}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const newVal = e.currentTarget.value;
                                    is.setPostItemImgUrl(newVal);
                                    }}></Form.Control>
                                <Button variant="outline-secondary" onClick={() => handleImagePreview()}>Preview</Button>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="outline-success" onClick={() => onSubmit()}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
    }
}

export default observer(ItemById)