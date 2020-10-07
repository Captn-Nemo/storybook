import React from "react";
import { Col, Image } from "react-bootstrap";
const footerImg = require("./../assets/images/footer.png");
export const Footer = () => {
  return (
    <Col className="d-flex justify-content-end align-items-end m-3">
      <Image src={footerImg} fluid />
    </Col>
  );
};
