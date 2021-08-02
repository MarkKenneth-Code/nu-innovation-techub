import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import NULogo from "../../assets/NU-Logo.png";
import "../../styles/NavBar.css";
export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="d-flex" href="/">
          <img src={NULogo} alt="" className="pr-2 d-none d-sm-block" />
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="navbar-label">
            {" "}
            NU INNOVATION TECH HUB
            <br />
            <small className="fw-light fs-6 d-block">
              Center for Innovation &amp; Entrepreneurship
            </small>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="m-0" href="/products/innovations">
              PRODUCTS
            </Nav.Link>
            <Nav.Link className="m-0" href="/innovators">
              INNOVATORS
            </Nav.Link>
            <Nav.Link className="m-0" href="/aboutus">
              ABOUT US
            </Nav.Link>
            <Nav.Link className="m-0" href="/contactus">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
