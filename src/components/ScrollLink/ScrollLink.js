import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export const NavLink = (props) => {
  const { goto = "about" } = props;
  return (
    <Link
      style={{ cursor: "pointer" }}
      activeClass="active"
      to={goto}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      {props.children}
    </Link>
  );
};
