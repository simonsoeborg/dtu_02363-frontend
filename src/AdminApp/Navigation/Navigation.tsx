import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { observer } from "mobx-react-lite";
import { authentication } from "../../Stores/AuthenticationStore";
import { Dispatch, SetStateAction } from "react";
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
      <Navbar.Brand href="/">EasyTap</Navbar.Brand>
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
  // if(props.role === "waiter") {
  //   return (
  //     <NoNav />
  //   )
  // } else {
  //   return (
  //     <MainNav />
  //   )
  // }
};

export const NoNav = () => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <>
    { isAuthenticated && (
      <Button variant="light" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
      )}
    </>
  )
}

export const MainNav = () => {
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
  )
}

export default observer(GlobalNavbar);
