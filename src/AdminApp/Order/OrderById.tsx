import { observer } from "mobx-react-lite"
import { os } from '../../Stores/OrderStore';
import { is } from '../../Stores/ItemStore';
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ItemModel from "../../Models/ItemModel";
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';

const OrderById = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const itemFromItemID = (id : number) => {
        let res : ItemModel = new ItemModel()
        is.Items.map((item) => {
            if(item.id === id) {
                res = item;
            } 
        })
        return res;
    }

    const getItemsFromOrderInfo = (id : number) => {
        const itemList = os.Orders.map((order) => {
            if(id === order.orderInfoId) {
                return itemFromItemID(order.itemId);
            }
        })
        return itemList;
    }

    const isOrderPayed = (id : number) => {
        if(os.OrderInfoSpecific.id === id && os.OrderInfoSpecific.OrderPayed) {
            return <CheckIcon />
        } else {
            return <RemoveIcon />
        }
    } 

    const list = getItemsFromOrderInfo(Number(id))
    let sum = 0;
    list.map((item) => {
        if(item) {
            sum += item.price
        }
    })
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="11">
                    <h1>Order: {id}</h1>
                </Col>
                <Col>
                    <Button variant="outline-danger" onClick={() => navigate(-1)}>Back</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
            <Table striped bordered hover size="sm">
                <thead>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>OrderPayed <RemoveIcon /> / <CheckIcon /></th>
                </thead>
                <tbody>
                { list.map((item, index) => (
                    item && (
                    <tr key={index}>
                        <td>{item.itemName}</td>
                        <td>{item.categoryName}</td>
                        <td>${item.price}</td>
                        <td>{isOrderPayed(item.id)}</td>
                    </tr>
                    )
                ))}
                <tr>
                    <th colSpan={2}>Total Sum</th>
                    <th>${sum}</th>
                    <th></th>
                </tr>
                </tbody>
            </Table>
            </Row>
        </Container>
    )
}

export default observer(OrderById)