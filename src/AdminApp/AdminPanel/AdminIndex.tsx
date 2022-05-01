import { Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import AdminIndexCards from './AdminIndexCards';
import { Dispatch, SetStateAction } from "react";

const AdminIndex = () => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <AdminIndexCards />
            </Row>
        </Container>
    )
}

export default observer(AdminIndex);