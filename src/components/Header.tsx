import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary px-5">
      <div className="kotak"></div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end w-100 align-items-center">
          <Nav.Link href="#deets">Our Services</Nav.Link>
          <Nav.Link href="#deets">Why Us</Nav.Link>
          <Nav.Link href="#deets">Testimonial</Nav.Link>
          <Nav.Link href="#deets">FAQ</Nav.Link>
          <Nav.Link>
            <Button variant="success">Success</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
