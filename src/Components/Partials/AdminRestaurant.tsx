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
                         <th>Owner ID</th>
                    </tr>
                </thead>
                <tbody>
                    {us.Restaurants.map((restaurant, index) =>( 
                            <tr className="tableListItem" onClick={() => routeEditOwner(restaurant.ownerID)} key={index}>
                            <td>{restaurant.id}</td>
                            <td>{restaurant.restaurantName}</td>
                            <td>{restaurant.ownerName}</td>
                            <td>{restaurant.ownerID}</td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    )}
}

export default observer(AdminRestaurant);