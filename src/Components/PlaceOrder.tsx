import { Container, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import MenuCategoryButton from './Partials/MenuCategoryButton';
import { cs } from "../Stores/CategoryStore";
import { observer } from "mobx-react-lite";
import Loading from './Partials/Loading';

//Hardcoded tableNumber, but should get tableNumber from an onClick function earlier.
const PlaceOrder = ({tableNumber = '5'}) => {
    if(!cs.Categories){
        return (
            <Loading />
        )
    } else {
        return (
            <Container fluid>
                    <Row>
                        <Col md="auto"><h1>Table: {tableNumber} </h1></Col>
                        <Col md="auto">Reserved to: </Col>
                    </Row>
                <Row>
                    <Col> 
                    <ButtonGroup aria-label="Menu Categories">
                        {
                            cs.Categories.map((category, index) => (
                                <Button key={index} variant="secondary">{category.name}</Button>
                            ))
                        }
                    </ButtonGroup>
                    </Col>
    
    
                    <Col> 
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">burger</Button>
                        <Button variant="secondary">pizza</Button>
                        <Button variant="secondary">Desserts</Button>
                    </ButtonGroup>
                    </Col>
                </Row>
    
                <Row>
                    
                </Row>  
            </Container>
        )
    }
    }

export default PlaceOrder;