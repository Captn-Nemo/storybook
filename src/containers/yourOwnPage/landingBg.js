import React from "react";
import { Col, Row, Image } from "react-bootstrap";
const bg1 = require("../../assets/images/prod-bg-1.png");
const bg2 = require("../../assets/images/prod-bg-2.png");
const allkids = require("../../assets/images/kids/allkids.png");
export const LandingBg = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <Image src={bg1} fluid />
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <p className="amatic f13  d-flex justify-content-center align-items-center">
            Lorem Ipsum
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <p className="amatic f13  d-flex justify-content-center align-items-center">
            Lorem Ipsum
          </p>
        </Col>
        <Col md={6}>
          <Image src={bg2} fluid />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center"
        >
          <span className="chelsea text-bold fsemi  d-flex justify-content-center align-items-center">
            Lorem Ipsum
          </span>
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center"
        >
          <span className="amatic f11  d-flex justify-content-center align-items-center mb-5">
            Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
          </span>
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center mb-3  "
        >
          <Image src={allkids} fluid width="100%" />
        </Col>
      </Row>
    </>
  );
};
