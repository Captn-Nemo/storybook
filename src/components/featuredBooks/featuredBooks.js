import React from "react";
import "./featuredBook.css";
import Doodle from "../DoodleComponent/doodle";
import { Card, Row, Col } from "react-bootstrap";
let colors = [
  "#feeeb2",
  "#fdc700",
  "#c9ebec",
  "#4bbcc0",
  "#fddbb4",
  "#fa8807",
  "#d9c9ec",
  "#804cbf",
];
// let teal = ["#c9ebec", "#4bbcc0"];
// let orange = ["#fddbb4", "#fa8807"];
// let purple = ["#d9c9ec", "#804cbf"];

const books = [
  {
    title: "You Go Back to School",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut",
    age: "4-9",
    price: 30,
  },
  {
    title: "You Go Back to School",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut",
    age: "4-9",
    price: 30,
  },
  {
    title: "You Go Back to School",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut",
    age: "4-9",
    price: 30,
  },
  {
    title: "You Go Back to School",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut",
    age: "4-9",
    price: 30,
  },
  {
    title: "You Go Back to School",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut",
    age: "4-9",
    price: 30,
  },
  {
    title: "You Go Back to School",
    img: require("../../assets/images/books/book1cover.png"),
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut",
    age: "4-9",
    price: 30,
  },
];

const FeaturedBook = (props) => {
  return (
    <>
      {books.map((book, i) => {
        return (
          <Col
            md={{ span: 4, offset: 0 }}
            className="d-flex justify-content-between mx-auto p-2"
          >
            <Card key={i} className="inner">
              <div
                className="imageBlock"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: colors[i % books.length],
                }}
              >
                <Doodle
                  fill={colors[i % books.length]}
                  style={{
                    width: "20%",
                    height: "20%",
                    position: "absolute",
                    right: "-5px",
                    bottom: "5px",
                  }}
                />
                <Doodle
                  fill={colors[i % books.length]}
                  style={{
                    width: "20%",
                    height: "30%",
                    position: "absolute",
                    left: "-5px",
                    top: "5px",
                  }}
                />
                <Card.Img
                  src={require("../../assets/images/books/book1cover.png")}
                  className="innerimg"
                  style={{
                    width: "40%",
                    marginLeft: "30%",
                  }}
                />
              </div>

              <Card.Body>
                <Card.Subtitle className="mb-2">{book.title}</Card.Subtitle>
                <Card.Text className="text-muted blockquote-footer">
                  {book.desc}
                </Card.Text>
                <Row
                  md={{ span: 12 }}
                  className="d-flex justify-content-between px-3"
                >
                  <Card.Text
                    className="bold f6"
                    style={{ color: "#5bb4b5", alignItems: "flex-end" }}
                  >
                    Age {book.age}
                  </Card.Text>
                  <Card.Text className="bold f6 uppercase">
                    AED{book.price}
                  </Card.Text>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
      {/* <a href="/projects/storically/book" class="booklink">
        {" "}
        dasd
      </a> */}
    </>
  );
};

export default FeaturedBook;
