import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/utils/AuthContext';


function MyNavbar() {
  
  const { username, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const brandLink = isLoggedIn ? '/dashboard' : '/';

  const handleLogout = async () => {
    try {
      await axios.delete('https://localhost:7230/api/login', {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      Cookies.remove('userInfo'); // Session cache
      logout();
      navigate('/login', {replace: true});
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Container>
        <LinkContainer to={brandLink}>
          <Navbar.Brand>Srichakra</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!isLoggedIn() && (
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            )}
            {!isLoggedIn() && (
              <LinkContainer to="/products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
            )}
            {!isLoggedIn() && (
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            )}
            {!isLoggedIn() && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {isLoggedIn() && (
                <LinkContainer to="/dashboard">
                  <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
            )}
            {isLoggedIn() && (
                <LinkContainer to="/procurement">
                  <Nav.Link>Procurement</Nav.Link>
                </LinkContainer>
            )}
            {isLoggedIn() && (
                <LinkContainer to="/Processing">
                  <Nav.Link>Processing</Nav.Link>
                </LinkContainer>
            )}
            {isLoggedIn() && (
                <LinkContainer to="/Sales">
                  <Nav.Link>Sales</Nav.Link>
                </LinkContainer>
            )}
            {isLoggedIn() && (
                <LinkContainer to="/Administration">
                  <Nav.Link>Administration</Nav.Link>
                </LinkContainer>
            )}
            {isLoggedIn() && (

                <NavDropdown title={username} id="profile-dropdown" className="ms-auto">
                  <LinkContainer to="/Profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>

            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
