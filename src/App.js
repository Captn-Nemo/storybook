import React from "react";
import HomeLayout from "./Layout/homePage/home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./containers/navigation/navigation";
import { Row, Col } from "react-bootstrap";
import { Footer } from "./containers/footer";
import ProductLayout from "./Layout/products/product";
function App() {
  return (
    <>
      <header>
        <Row className="bg-info discount">
          <Col>
            <p className="text-light text-center">
              place for discount code or whatever we need to add
            </p>
          </Col>
        </Row>
      </header>
      <header className="sticky-top">
        <Navigation />
      </header>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="App">
              <HomeLayout />
            </div>
          </Route>
          <Route path="/product" exact>
            <div className="App">
              <ProductLayout />
            </div>
          </Route>
        </Switch>
        <Row className="bg-warning">
          <Footer />
        </Row>
      </Router>
    </>
  );
}

export default App;
