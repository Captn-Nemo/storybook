import React from "react";
import { Row, Col } from "react-bootstrap";
import { BrowseTitles } from "../../containers/browseTitles/browseTitles";
import { Footer } from "../../containers/footer";
import { Header } from "../../containers/header";
import { KidsBG } from "../../containers/KidsBg/kids";

import { YourStory } from "../../containers/yourStory/yourstory";
import "./home.css";
const HomeLayout = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <BrowseTitles />
      </section>
      <section>
        <Row className="kids">
          <KidsBG />
        </Row>
      </section>
      <section>
        <Row className="bg-light">
          <YourStory />
        </Row>
      </section>
    </>
  );
};

export default HomeLayout;
