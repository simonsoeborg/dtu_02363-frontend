import { Container, Table } from "react-bootstrap";
import { us } from "../../Stores/RestaurantStore";
// import { usUser } from "../../Stores/UserStore";
import Loading from '../Partials/Loading';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";


const AdminRestaurant = () => {

    // Benytter pt. component UserbyID.
    const navigate = useNavigate();
    const routeEditOwner = (ownerID : number) => {
        navigate(`/User/${ownerID}`, {replace: false})
    };

    const routeEditRestaurant= (id : number) => {
        navigate(`/Restaurant/${id}`, {replace: false})
    };

    if(!us.Restaurants) {
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
                    {us.Restaurants.map((restaurant, index) =>( 
                        // Todo: Hover funktionalitet skal vise at man både kan  trykke på restaurant og owner navn.
                            <tr className="tableListItem"  key={index}>
                            <td onClick={() => routeEditRestaurant(restaurant.id)} >{restaurant.id}</td>
                            <td onClick={() => routeEditRestaurant(restaurant.id)}>{restaurant.restaurantName}</td>
                            <td onClick={() => routeEditOwner(restaurant.ownerID)}>{restaurant.ownerName}</td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    )}
}

export default observer(AdminRestaurant);