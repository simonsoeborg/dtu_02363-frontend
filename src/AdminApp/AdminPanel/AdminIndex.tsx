import { Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import AdminIndexCards from './AdminIndexCards';
import { Dispatch, SetStateAction } from "react";

interface IAdminProps {
    activeKey: number;
    setActiveKey: Dispatch<SetStateAction<number>>;
}
const AdminIndex = (props : IAdminProps) => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <AdminIndexCards activeKey={props.activeKey} setActiveKey={props.setActiveKey} />
            </Row>
        </Container>
    )
}

export default observer(AdminIndex);