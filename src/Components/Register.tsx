import { Button, Card, Container, Form, Image, Row } from 'react-bootstrap';
import defaultUserImage from '../resources/default_user.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { us } from '../Stores/UserStore';

const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const handleOnSubmit = () => {
        // Set store and POST to API
        us.setPostUserEmail(email);
        us.setPostUserName(name);
        us.setPostUserPassword(password);
        us.postUserAsync(us.PostUser);
        navigate("/", {replace: false})
    }

    return (
        
        <Row className="justify-content-center">
        <Container style={{ maxWidth: "20rem", margin: "10rem"}}>
            <Card>
            <Card.Header>
                <Card.Title>Register</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row className="justify-content-center">
                    <Image style={{ maxHeight: "7.5rem", maxWidth: "7.5rem", padding: "1rem", margin: "1rem"}} fluid roundedCircle src={defaultUserImage} />
                </Row>
                <Row>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Control type='text' placeholder="Enter Name" onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                const newVal = e.currentTarget.value;
                                setName(newVal);
                                }} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control type='email' placeholder="Enter Email" onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                const newVal = e.currentTarget.value;
                                setEmail(newVal);
                                }} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control type='password' placeholder="Enter Password" onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                const newVal = e.currentTarget.value;
                                setPassword(newVal);
                                }} />
                        </Form.Group>
                    </Form>
                </Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "center", padding: "1rem"}}>
                <Button style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} onClick={() => handleOnSubmit()} variant="outline-success">Register</Button> 
                <Button style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} onClick={() => navigate(-1)} variant="outline-danger">Cancel</Button>
            </Card.Footer>
        </Card>
    </Container>
</Row>
    )
}

export default Register;