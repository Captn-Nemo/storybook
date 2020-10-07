import React from "react";
import {
  Row,
  Col,
  Image,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";
const navLogo = require("../../assets/images/navLogo.png");
export const Navigation = () => {
  return (
    <Row className="bg-light sticky-top navigation">
      <Col className="collapse-nav">
        <Navbar bg="light" expand="lg" className="collapse-nav">
          <Navbar.Brand href="#home">
            <Image src={navLogo} fluid className="m-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mr-auto ml-4">
              <Nav.Link href="" className="navitem">
                Home
              </Nav.Link>
              <Nav.Link href="#home" className="navitem">
                Your own
              </Nav.Link>
              <Nav.Link href="#home" className="navitem">
                Templates
              </Nav.Link>
              <Nav.Link href="#home" className="navitem">
                Contact
              </Nav.Link>
              <Nav.Link href="#home" className="navitem">
                Blog
              </Nav.Link>
              <Nav.Link href="#home" className="navitem">
                FAQ
              </Nav.Link>
              <Nav.Link href="#home" className="navitem">
                T{`&`}C
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search title/age"
                className="ml-4 custominput"
              />

              <Button variant="" className="btn btn-rounded">
                {/* <FontAwesomeIcon
                  icon={faFlagUsa}
                  color="#814dbe"
                  size={45}
                  className="icon"
                /> */}
                <Image src={require("../../assets/images/usa.png")} fluid />
                <span className="navitem ml-2">English</span>
              </Button>
              <Button variant="" className="btn btn-rounded">
                <FontAwesomeIcon
                  icon={faCartPlus}
                  color="#fdc700"
                  size={45}
                  className="icon"
                />
                <span className="navitem ml-2">MY ACCOUNT</span>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      {/* <Col md={4}>TextBox</Col> */}
    </Row>
  );
};
