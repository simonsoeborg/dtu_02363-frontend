import { Nav, Navbar, Container } from "react-bootstrap";

const GlobalNavbar = () => {
  return (
    <Navbar expand="lg" bg="light">
    <Container>
      <Navbar.Brand href="/">Restaurant App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="me-auto" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="Login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="PlaceOrder">PlaceOrder</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="AdminPanel">AdminPanel</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default GlobalNavbar;