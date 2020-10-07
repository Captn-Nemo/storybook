import React from "react";
import { Row, Col, Image, Button, Form } from "react-bootstrap";
import "./style.css";
const left = require("../../../assets/images/prod-h-left.png");
const right = require("../../../assets/images/header-r-bg.png");
const showBook = require("../../../assets/images/show-book.png");
const bookThumb = require("../../../assets/images/book-thumb.png");
const info = require("../../../assets/images/infotext.png");

const CustomButton = (props) => {
  return (
    <Button
      {...props}
      className={props.teal ? "formBtn2" : "formBtn"}
      style={{ background: props.bg }}
    >
      {props.children}
    </Button>
  );
};

export const ProdHeader = () => {
  return (
    <>
      <Row className="mt-5">
        <Col md={2}>
          <Image
            src={left}
            className="mt-5 d-sm-none d-xs-none d-md-block d-none d-lg-block"
          />
        </Col>
        <Col md={4} className="m-4">
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="d-flex justify-content-center align-items-center">
              <Image src={showBook} height="100%" />
            </Col>
            <Col className="d-flex justify-content-center align-items-center mt-3">
              <Button variant="blank">
                <Image src={bookThumb} height="20%" className="mx-1" />
              </Button>
              <Button variant="blank">
                <Image src={bookThumb} height="20%" className="mx-1" />
              </Button>
              <Button variant="blank">
                <Image src={bookThumb} height="20%" className="mx-1" />
              </Button>
              <Button variant="blank">
                <Image src={bookThumb} height="20%" className="mx-1" />
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="m-4">
          <Row>
            <span className="asapbold f17 text-center">
              You go Back to School
            </span>
          </Row>
          <Row>
            <span className="asapbold f12 bold text-center text-uppercase teal">
              AED 50
            </span>
          </Row>
          <Row>
            <p className="asap bold f11 subtitle text-uppercase p-4 border border-warning">
              Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            </p>
          </Row>
          <Row>
            <Col className="p-5">
              <Image src={info} height="100%" />
            </Col>
          </Row>
        </Col>
        <Col>
          <Image
            src={right}
            fluid
            className="d-sm-none d-xs-none d-md-block d-none d-lg-block"
          />
        </Col>
      </Row>
      <Row className="formRow">
        <Col className="custom m-5">
          <Form.Control type="text" className="custom" placeholder="NAME" />
          <Form.Control
            type="text"
            className="custom"
            placeholder="AGE (NUMBER)"
          />
        </Col>
        <Col className="mt-5">
          <Row>
            <Col md={6} className=" d-flex ">
              <CustomButton bg="red">BOY</CustomButton>
            </Col>
            <Col md={6} className=" d-flex ">
              <CustomButton> GIRL</CustomButton>
            </Col>
            <Col
              md={12}
              className=" d-flex justify-content-center align-items-center mt-3"
            >
              <CustomButton block>FAVOURITE SCHOOL ZONE</CustomButton>
            </Col>
          </Row>
        </Col>
        <Col className=" d-flex  align-items-center mt-1">
          <CustomButton teal={true}>PREVIEW FULL BOOK</CustomButton>
        </Col>
      </Row>
    </>
  );
};
