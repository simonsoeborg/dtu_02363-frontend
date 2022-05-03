import { Container, Table } from "react-bootstrap"
import Loading from '../../Partials/Loading';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { os } from '../../Stores/OrderStore';
import { is } from '../../Stores/ItemStore';

const AdminOrderList = () => {
    const navigate = useNavigate();

    const routeEditChange = (id : number) => {
        navigate(`/Order/${id}`, {replace: false})
    };

    const itemNameFromItemID = (id : number) => {
        let itemName = ""
        is.Items.map((item) => {
            if(item.id === id) {
                itemName = item.itemName;
            } 
        })
        return itemName;
    }


    if(!os.Orders) {
        return <Loading />
    } else {
        
        const getFilteredOrders = () => {
            const filteredList = os.Orders.map(order => order.orderInfoId).filter((value, index, self) => self.indexOf(value) === index);
            return filteredList;
        }

        const getItemsFromOrderInfo = (orderInfoId : number) => {
            const itemList = os.Orders.map((order) => {
                if(orderInfoId === order.orderInfoId) {
                    return itemNameFromItemID(order.itemId) + ", ";
                }
            })
            return itemList;
        }


        return (
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>OrderInfoId</th>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        { getFilteredOrders().map((order, index) => (
                            <tr className="tableListItem" onClick={() => routeEditChange(order)} key={index}>
                                <td >{order}</td>
                                <td>
                                    { getItemsFromOrderInfo(order) }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default observer(AdminOrderList);