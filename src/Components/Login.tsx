import { useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formFilled, setFormFilled ] = useState(false);
    const [emailFilled, setEmailFilled ] = useState(false);
    const [passwordFilled, setPasswordFilled ] = useState(false);

    const checkIfFormIsFilled = () => {
        if(email.length > 3) {
            setEmailFilled(true)
        } else {
            setEmailFilled(false)
        }
    
        if(password.length > 3) {
            setPasswordFilled(true)
        } else {
            setPasswordFilled(false)
        }

        if(emailFilled && passwordFilled) {
            setFormFilled(true)
        } else {
            setFormFilled(false)
        }
    }

    // Convert password to sha256 or something
    return (
        
            <Row className="justify-content-center">
                <Container style={{ maxWidth: "20rem", margin: "10rem"}}>
                    <Card>
                    <Card.Header>
                        <Card.Title>Login</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Control type='email' placeholder="Enter Email" onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                    const newVal = e.currentTarget.value;
                                    setEmail(newVal);
                                    checkIfFormIsFilled();
                                    }} />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='password' placeholder="Enter Password" onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                    const newVal = e.currentTarget.value;
                                    setPassword(newVal);
                                    checkIfFormIsFilled();
                                    }} />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: "center", padding: "1rem"}}>
                        {
                            formFilled ?
                            <Button style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} variant="outline-success" onMouseOver={checkIfFormIsFilled}>Login</Button> 
                            : { checkIfFormIsFilled } && 
                            <Button style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} variant="outline-success" disabled>Login</Button>
                        }
                        <Button style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} variant="outline-danger">Cancel</Button>
                    </Card.Footer>
                </Card>
            </Container>
        </Row>
    )
}

export default Login;