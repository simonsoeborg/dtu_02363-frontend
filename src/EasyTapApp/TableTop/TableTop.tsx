import { Container, Modal, Button, Row } from "react-bootstrap";
import Order from '../Order/Order';
import { useState } from 'react';

const TableTop = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container fluid>
      <Container className="TableTopModal">
      <Row>
        <Button variant="primary" onClick={handleShow}>
          Table onClick
        </Button>
      </Row>
        <Row>
          <Modal fullscreen show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Table: 1</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Order />
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </Container>
  );
};

export default TableTop;
