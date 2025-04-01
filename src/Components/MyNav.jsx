import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const MyNav = function () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark" className=" fixed-top" >
      <Container >
        <Navbar.Brand className=" fs-4 " href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link className=" fs-4 text-black" href="#features">Home</Nav.Link>
            <Nav.Link className=" fs-4 text-black" href="#pricing">About</Nav.Link>
            <Nav.Link className=" fs-4 text-black" href="#pricing">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
