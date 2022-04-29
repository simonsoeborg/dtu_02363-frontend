import { observer } from "mobx-react-lite"
import { CardGroup, Card } from "react-bootstrap"
import { authentication } from '../../Stores/AuthenticationStore';
import { Dispatch, SetStateAction } from "react";

interface IAdminProps {
    activeKey: number;
    setActiveKey: Dispatch<SetStateAction<number>>;
}
// Display Cards
const AdminIndexCards = (props : IAdminProps) => {

    const handleOnCardClickEvent = (key : number) => {
        props.setActiveKey(key);
    }

    return (
        <CardGroup>
            <Card className="CardGroupCard" onClick={() => handleOnCardClickEvent(3)} >
                <Card.Body>
                    <Card.Title>Authenticated Users Count</Card.Title>
                    <Card.Text>
                        We currently have { authentication.RBACAuthFullList.length } users in our system!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="CardGroupCard" onClick={() => handleOnCardClickEvent(2)}>
                <Card.Body>
                    <Card.Title>Items Count</Card.Title>
                    <Card.Text>
                        We currently have { } items in our system!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="CardGroupCard">
                <Card.Body>
                    <Card.Title>Orders Count</Card.Title>
                    <Card.Text>
                        We currently have { } orders in our system!
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default observer(AdminIndexCards);