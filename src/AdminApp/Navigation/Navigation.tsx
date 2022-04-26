import { Nav, Navbar, Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { observer } from "mobx-react-lite";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

interface IProps {
  role : string,
}

const GlobalNavbar = (props : IProps) => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <Navbar expand="lg" bg="light">
    <Container>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="me-auto" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/"><HomeIcon /></Nav.Link>
          </Nav.Item>
          { props.role === "admin" && (
            <Nav.Item>
              <Nav.Link href="/AdminPanel">AdminPanel</Nav.Link>
            </Nav.Item>
          )}
          { props.role === "waiter" && (
            <Nav.Item>
              <Nav.Link href="/EasyTap">EasyTapApp</Nav.Link>
            </Nav.Item>
          )}

        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
              {isAuthenticated ? (
                <Nav.Item>
                  <Nav.Link
                    href="/"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Logout <LogoutIcon />
                  </Nav.Link>
                </Nav.Item>
              ) : (
                  <Nav.Item>
                    <Nav.Link href="/Login">Login <LoginIcon /></Nav.Link>
                  </Nav.Item>
              )}
            </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};

export default observer(GlobalNavbar);
