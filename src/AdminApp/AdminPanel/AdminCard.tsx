import { observer } from "mobx-react-lite";
import { Card } from "react-bootstrap";

interface CardProps {
    count ?: number,
    name : string,
}

const AdminCard = (props : CardProps) => {
    return(
        <Card >
            <Card.Body>
                <Card.Title style={{ textAlign: "center", fontSize: "2rem"}}>{props.count}</Card.Title>
                <hr />
                <Card.Text style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "1.3rem" }}>{ props.name }</span> <br />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default observer(AdminCard);