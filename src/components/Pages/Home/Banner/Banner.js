import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 500 }}
          src="https://t4.ftcdn.net/jpg/02/77/86/45/240_F_277864525_kV0EwxrvotMyvFB1wUkVTw2e71xQqaCQ.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>30% off for all of our products</h1>
          <p>we are offering for the New Year 2022.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 500 }}
          src="https://t4.ftcdn.net/jpg/00/66/52/25/240_F_66522506_jRvrrnnfbu3TC1wrqXGvFJFmDTm2XTo6.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="text-danger">
          <h1>30% off for all of our products</h1>
          <p>we are offering for the New Year 2022.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: 500 }}
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/02/85/46/07/240_F_285460722_WlwSgE1pRZgx1BT29xtD6C4Zzob1UUqr.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="text-danger">
          <h1>30% off for all of our products</h1>
          <p>we are offering for the New Year 2022.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
