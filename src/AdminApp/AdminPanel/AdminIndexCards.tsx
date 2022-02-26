import { observer } from "mobx-react-lite"
import { CardGroup, Card } from "react-bootstrap"
import { us } from '../../Stores/UserStore';
import { rs } from '../../Stores/RestaurantStore';

const AdminIndexCards = () => {

    return (
        <CardGroup>
            <Card className="CardGroupCard" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>User Count</Card.Title>
                    <Card.Text>
                        We currently have { us.Users.length } users in our system!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="CardGroupCard" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Restaurants Count</Card.Title>
                    <Card.Text>
                        We currently have { rs.RestaurantsView.length } restaurants in our system!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="CardGroupCard" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>?? Count</Card.Title>
                    <Card.Text>
                        We currently have  ?? in our system!
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default observer(AdminIndexCards);