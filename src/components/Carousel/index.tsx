/* eslint-disable react/no-array-index-key */
import React from "react";
import "react-multi-carousel/lib/styles.css";
import CardsCarousel from "react-multi-carousel";
import slide from "../../setup/slides";
import responsive from "../../setup/responsive";
import { Card, Circle } from "./styles";

export default function Carousel() {
  return (
    <CardsCarousel
      responsive={responsive}
      autoPlay
      infinite
      containerClass="carousel"
    >
      {slide.map((item, index) => (
        <Card
          key={index}
          theme={{ color: item.color, secondColor: item.secondColor }}
        >
          <Circle>
            <img src={item.src} alt="Icon" />
          </Circle>
          <h1> {item.item} </h1>
          <p> {item.description} </p>
        </Card>
      ))}
    </CardsCarousel>
  );
}
