import { Container, Row, Table, Image, Modal, Col, Button } from "react-bootstrap"
import Loading from '../../Partials/Loading';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { is } from '../../Stores/ItemStore';
import { useState } from "react";

const AdminItemList = () => {
    const navigate = useNavigate();
    const [onHover, setOnHover] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [hasLoaded, setHasLoaded] = useState(false);
    const handleClose = () => setOnHover(false);

    if(!hasLoaded) {
        is.getItemsAsync();
        setHasLoaded(true);
    }

    const displayImage = (imgUrl ?: string) => {
        setOnHover(true);
        setImageUrl(imgUrl!!);
    }

    const routeEditChange = (id : number) => {
        navigate(`/Item/${id}`, {replace: false})
    };

    const routeNewItem = () => {
        navigate(`/Item/Create`, {replace: false})
    };

    if(!is.Items) {
        return <Loading />
    } else {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md="10">
                    <h1>Item List</h1>
                    </Col>
                    <Col>
                        <Button variant="outline-success" onClick={() => routeNewItem()}>Add Item</Button>
                    </Col>
                    <Modal show={onHover} onHide={handleClose}>
                        <Modal.Body>
                            <Image src={imageUrl} fluid/>
                        </Modal.Body>
                    </Modal>
                </Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Image URL</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { is.Items.map((item, index) => (
                                <tr className="tableListItem"key={index}>
                                    <td onClick={() => routeEditChange(item.id)} >{item.id}</td>
                                    <td onClick={() => routeEditChange(item.id)} >{item.itemName}</td>
                                    <td onClick={() => routeEditChange(item.id)} >{item.categoryName}</td>
                                    <td onClick={() => routeEditChange(item.id)} >$ {item.price}</td>
                                    <td className="LimitedTableTextEntry" onClick={() => displayImage(item.imgUrl)}><a className="LimitedTableTextEntry">Click for Image Preview</a></td>
                                    <td><Button variant="outline-danger" onClick={() => is.deleteItem(item.id)}>Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
            </Container>
        )
    }
}

export default observer(AdminItemList);