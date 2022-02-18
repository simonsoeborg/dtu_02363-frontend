import { Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import AdminIndexCards from './AdminIndexCards';

const AdminIndex = () => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1>Admin Index</h1>
            </Row>
            <Row>
                <AdminIndexCards />
            </Row>
        </Container>
    )
}

export default observer(AdminIndex);