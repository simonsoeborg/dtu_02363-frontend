import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { observer } from "mobx-react-lite";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { authToken } from '../../Stores/AuthTokenStore';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 

const GlobalNavbar = () => {
  const { isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/Login", {replace: false});
  }
  const navigateToAdmin = () => {
    navigate("/AdminPanel", {replace: false});
  }
  const navigateToEasyTap = () => {
    navigate("/EasyTap", {replace: false});
  }
  return (
    <Navbar expand="lg" bg="light">
    <Container>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="me-auto" activeKey="/">
          <Nav.Link as={Link} to="/" ><HomeIcon /></Nav.Link>
          { authToken.getRole() === "admin" && (
          <Nav.Link as={Link} to="/AdminPanel" >AdminPanel</Nav.Link>
          )}
          { authToken.getRole() === "admin" && (
          <Nav.Link as={Link} to="/EasyTap" >EasyTapApp</Nav.Link>
          )}
          { authToken.getRole() === "waiter" && (
          <Nav.Link as={Link} to="/EasyTap" >EasyTapApp</Nav.Link>
          )}

        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
              {isAuthenticated ? (
                <Nav.Link onClick={() => logout({ returnTo: window.location.origin })}>Logout <LogoutIcon /></Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/Login" >Login <LoginIcon /></Nav.Link>
              )}
            </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};

export default observer(GlobalNavbar);
