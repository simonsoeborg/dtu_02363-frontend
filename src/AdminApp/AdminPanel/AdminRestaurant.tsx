import { Container, Table } from "react-bootstrap";
import { rs } from "../../Stores/RestaurantStore";
import Loading from '../../Partials/Loading';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const AdminRestaurant = () => {

    const navigate = useNavigate();

    const routeEditOwner = (ownerID : number) => {
        navigate(`/User/${ownerID}`, {replace: false})
    };

    const routeEditRestaurant= (id : number) => {
        navigate(`/Restaurant/${id}`, {replace: false})
    };

    if(!rs.RestaurantsView) {
        return (
            <Loading/>
        )
    } else {
    return (
        <Container>
         <h1>List of all resturants</h1>
            <Table> 
                <thead> 
                    <tr>
                         <th>Id</th>
                         <th>Restaurant name</th>
                         <th>Owner Name</th>
                    </tr>
                </thead>
                <tbody>
                    {rs.RestaurantsView.map((restaurant, index) =>( 
                        // Todo: Hover funktionalitet skal vise at man både kan  trykke på restaurant og owner navn.
                            <tr key={index}>
                            <td onClick={() => routeEditRestaurant(restaurant.id)}>{restaurant.id}</td>
                            <td className="tableListItem" onClick={() => routeEditRestaurant(restaurant.id)}>{restaurant.restaurantName}</td>
                            <td className="tableListItem"onClick={() => routeEditOwner(restaurant.ownerID)}>{restaurant.ownerName}</td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    )}
}

export default observer(AdminRestaurant);