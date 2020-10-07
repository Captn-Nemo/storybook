import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FormButton } from "../../components/formButton/formButton";
import "./yourstory.css";
const title = require("../../assets/images/yourStory.png");
const spaceShip = require("../../assets/images/spaceship.png");
const girlhead = require("../../assets/images/girlHead.png");
export const YourStory = () => {
  return (
    <>
      <Col
        md={12}
        className="d-flex flex-row justify-content-center align-items-center"
      >
        <Image src={spaceShip} fluid className=" mt-5" />
        <Image src={title} fluid className="" />
      </Col>
      <Col>
        <Row className="mt-5">
          <Col md={6} sm={12}>
            <Card className="leftBox m-5">
              <span className="chelsea fsemi orange">Write Your</span>
              <span className="chelsea fsemi orange">Own</span>
              <Card.Body>
                <FormButton title="GUIDED" color="#fa8807" />
                <FormButton title="TYPE IN LONG FORM" color="#fa8807" />
                <FormButton title="AUDIO INPUT" color="#fa8807" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={12}>
            <Image src={girlhead} fluid className="girl" />
            <Card className="rightBox">
              <span className="chelsea fsemi violet">Write Your</span>
              <span className="chelsea fsemi violet">Own</span>
              <Card.Body>
                <FormButton title="FOR GROWN UP'S" color="#804cbf" />
                <FormButton title="FOR CHILDREN" color="#804cbf" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <span className="red f16" style={{ color: "red" }}>
              HERE WE WILL HAVE SOMETHING ELSE THAT IDK WHAT WILL BE YET
            </span>
          </Col>
        </Row>
      </Col>
    </>
  );
};
