import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import FeaturedBook from "../../components/featuredBooks/featuredBooks";
import "./titles.css";
const Doodlebar = require("../../assets/images/doodlesBar.svg");
export const BrowseTitles = () => {
  return (
    <>
      <div className="wrapper">
        <Row className="bg-warning titleDiv">
          <Col md={4} style={{ overflow: "hidden" }}>
            <img className="doodleBar" src={Doodlebar} alt="" />
          </Col>
          <Col md={4} className="text-center">
            <span
              className="chelsea f17a white align-middle text"
              // style={{ textShadow: "-2px -2px 1px white" }}
            >
              BROWSE TITLES
              {/* <b className=" teal f17a asap" style={{ textShadow: "none" }}>
                {" "}
                &nbsp;TITLES
              </b> */}
            </span>
          </Col>
          <Col md={4} style={{ overflow: "hidden" }}>
            <img className="doodleBar" src={Doodlebar} alt="" />
          </Col>
        </Row>
        <Row className="m-1 justify-space-between align-items-center display-flex-center flex-center p-5">
          <FeaturedBook />
          <Col md={{ offset: 5 }} className="mt-4">
            <Button
              className="btn btn-hover btn-outline btncustom chelsea text-white p-3"
              variant="warning"
            >
              SEE MORE
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
