import { Container, Table } from "react-bootstrap";
import { rs } from "../../Stores/RestaurantStore";
// import { usUser } from "../../Stores/UserStore";
import Loading from '../Partials/Loading';
import { observer } from "mobx-react-lite";


const AdminRestaurant = () => {
    if(!rs.Restaurants) {
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
                         <th>Name</th>
                         <th>Owner ID</th>
                    </tr>
                </thead>
                <tbody>
                    {rs.Restaurants.map((restaurant, index) =>( 
                            <tr key={index}>
                            <td>{restaurant.id}</td>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.ownerId}</td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    )}
}

export default observer(AdminRestaurant);