import { observer } from "mobx-react-lite"
import { CardGroup, Card } from "react-bootstrap"
import { us } from '../../Stores/UserStore';
import { useNavigate } from "react-router-dom";
import { as } from '../../Stores/AdminStore';

const AdminIndexCards = () => {
    const navigate = useNavigate();

    const handleOnUserCardFunction = () => {
        console.log(as.ActiveKey);
        as.setActiveKey(3);
        console.log(as.ActiveKey);
        navigate("/AdminPanel");
    }
    return (
        <CardGroup>
            <Card className="CardGroupCardWithOnClick" onClick={() => handleOnUserCardFunction()} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>User Count</Card.Title>
                    <Card.Text>
                        We currently have { us.Users.length } users in our system!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="CardGroupCardWithOnClick" onClick={() => handleOnUserCardFunction()} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Restaurants Count</Card.Title>
                    <Card.Text>
                        We currently have  restaurants in our system!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="CardGroupCardWithOnClick" onClick={() => handleOnUserCardFunction()} style={{ width: '18rem' }}>
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