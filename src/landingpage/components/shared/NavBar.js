import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import NULogo from "../../assets/NU-Logo.png";
import "../../styles/NavBar.css";
export default function NavBar() {
  return (
    <Navbar expand="xl" variant="dark" className="navbar-bg" sticky="top">
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
          <Nav className="ms-auto navbar-links">
            <Nav.Link className="m-0" href="/products/innovations">
              PRODUCTS
            </Nav.Link>
            <Nav.Link className="m-0" href="/innovators">
              INNOVATORS
            </Nav.Link>
            <NavDropdown
              className="exhibit-dropdown"
              title="EXHIBITS"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="m-0" href="/exhibit">
                Exhibit 2021
              </NavDropdown.Item>
              <NavDropdown.Item className="m-0" href="/exhibit">
                Exhibit 2020
              </NavDropdown.Item>
              <NavDropdown.Item className="m-0" href="/exhibit">
                Exhibit 2019
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="m-0" href="/aboutus">
              ABOUT US
            </Nav.Link>
            <Nav.Link className="m-0" href="/contactus">
              CONTACT US
            </Nav.Link>
            <Nav.Link className="m-0" href="/mycart/information">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
