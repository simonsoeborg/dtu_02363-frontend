import { observer } from "mobx-react-lite"
import { CardGroup } from "react-bootstrap"
import { authentication } from '../../Stores/AuthenticationStore';
import { cs } from '../../Stores/CategoryStore';
import { is } from '../../Stores/ItemStore';
import { os } from '../../Stores/OrderStore';
import AdminCard from './AdminCard';

const AdminIndexCards = () => {

    return (
        <CardGroup>
            <AdminCard count={ authentication.RBACAuthFullList.length } name={ "Users" }/>
            <AdminCard count={ is.Items.length } name={ "Items" }/>
            <AdminCard count={ cs.Categories.length } name={ "Categories" }/>
            <AdminCard count={ os.Orders.length } name={ "Orders" }/>
        </CardGroup>
    )
}

export default observer(AdminIndexCards);