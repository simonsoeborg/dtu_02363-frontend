import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { authentication } from "../../Stores/AuthenticationStore";
import { observer } from "mobx-react-lite";
import Loading from "../../Partials/Loading";
import { useState } from "react";
import { as } from '../../Stores/AdminStore';
import { switchRoles } from '../../Services/_services';
import AuthenticationModel from "../../Models/AuthenticationModel";
import { runInAction } from "mobx";

const UserById = () => {

    const { email } = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);

    if(!hasLoaded) {
        if(!authentication.AuthTemp) {
            setTimeout(() => {
                authentication.getAuthUserByEmailAsync(String(email));
            }, 500)
        } else {
            authentication.setAuthTemp(new AuthenticationModel("",false,"","","",""))
            setTimeout(() => {
                authentication.getAuthUserByEmailAsync(String(email));
            }, 500)
        }
        setHasLoaded(true);
    }

    const navigate = useNavigate();

    const handleOnSubmitFunction = () => {
        authentication.setAuthTemp(authentication.AuthTemp);
        authentication.putTemporaryAuthUser();
        as.setActiveKey(3);
        navigate(`/AdminPanel`)
    }

    if(!authentication.AuthTemp) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={6} md={6} lg={4}>
                        <h1 style={{ textAlign: "center"}}> {authentication.AuthTemp.name} </h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={authentication.AuthTemp.email} disabled/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" defaultValue={authentication.AuthTemp.name}
                                onChange={(e) => {
                                    runInAction(() => {
                                        authentication.setNameRBACTempUser(e.target.value);
                                    })
                                }}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Role</Form.Label>
                                <Form.Select onChange={(e) => {authentication.AuthTemp.roleId = Number(e.target.value)}}>
                                    <option>{switchRoles(authentication.AuthTemp.roleId)}</option>
                                    <option value="1">user</option>
                                    <option value="3">waiter</option>
                                    <option value="7">admin</option>
                                </Form.Select>
                            </Form.Group>

                            <Button variant="outline-warning" type="submit" onClick={() => handleOnSubmitFunction()}>
                                Confirm
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
    
}

export default observer(UserById);