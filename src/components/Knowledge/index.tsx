import React from "react";
import Carousel from "../Carousel";
import Title from "../Title";
import { KnowledgeContainer } from "./styles";

export default function Knowledge() {
  return (
    <>
      <KnowledgeContainer id="knowledge">
        <Title title="Conhecimentos" right={false} />
      </KnowledgeContainer>
      <Carousel />
    </>
  );
}
