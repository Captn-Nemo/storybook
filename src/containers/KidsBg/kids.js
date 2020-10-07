import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import "./kids.css";
const kids = require("../../assets/images/kids.png");
export const KidsBG = () => {
  return (
    <>
      <Col className="p-2 mt-3 mx-auto d-sm-none d-xs-none d-md-block d-none d-lg-block">
        <Image src={kids} fluid className="mx-auto" />
      </Col>
      <Col className="">
        <p className="amatic text-uppercase text-justify f13 text-bold m-5 p-2 text-white">
          Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </Col>
    </>
  );
};
