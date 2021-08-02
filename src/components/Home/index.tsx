import React from "react";
import Aos from "aos";
import Header from "../Header";
import { HomeContainer, HomeImg, TextContainer } from "./styles";

export default function Home() {
  Aos.init({ once: true });
  return (
    <HomeContainer id="home">
      <Header />
      <TextContainer data-aos="slide-right">
        <h1> Seja bem-vindo! </h1>
        <p>
          Olá, fico feliz com seu acesso, meu nome é Kaique Henrique, sou um
          Desenvolvedor/Programador JavaScript.
        </p>
      </TextContainer>
      <HomeImg data-aos="slide-left" src="/images/hello.svg" alt="Hello" />
    </HomeContainer>
  );
}
