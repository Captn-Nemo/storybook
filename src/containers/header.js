import React from "react";
import { Row, Col } from "react-bootstrap";
const HeaderRightBG = require("../assets/images/header_bg.png");
const HeaderLeft = require("../assets/images/headerLeft.png");
const GirlBG = require("../assets/images/readingKid.png");
const paginas = require("../assets/images/paginas.png");
export const Header = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col md={6}>
          <img src={HeaderLeft} style={{ width: "80%", height: "90%" }} />
        </Col>
        <Col md={6}>
          <img src={HeaderRightBG} style={{ width: "80%" }} />
        </Col>
        <Col md={{ offset: 3 }}>
          <img
            className="mx-auto"
            src={GirlBG}
            style={{ zIndex: 2, width: "60%" }}
          />
          <img
            className="mx-auto"
            src={paginas}
            style={{
              position: "absolute",
              top: 0,
              left: -200,
              zIndex: 1,
              width: "100%",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
