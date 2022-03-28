import { Nav, Navbar, Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const GlobalNavbar = () => {
  const { isAuthenticated, logout } = useAuth0();

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
              <Nav.Link href="/AdminPanel">AdminPanel</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/EasyTap">EasyTapApp</Nav.Link>
            </Nav.Item>
            {isAuthenticated ? (
              <Nav.Item>
                <Nav.Link
                  href="/"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Logout
                </Nav.Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Nav.Link href="/Login">Login</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlobalNavbar;
