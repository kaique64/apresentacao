import React from "react";
import Aos from "aos";
import Title from "../Title";
import { ContentContainer, WhoAmIContainer } from "./styles";

export default function WhoAmI() {
  Aos.init({ once: true });
  return (
    <WhoAmIContainer id="who-am-i">
      <img src="/images/pro.svg" alt="Professional" data-aos="slide-right" />
      <ContentContainer data-aos="slide-left">
        <Title title="Quem Sou" right />
        <p>
          Meu nome é Kaique Henrique, sou um Desenvolvedor/Programador
          JavaScript. Sou uma pessoa com atitudes proativas que busca sempre
          novos conhecimentos e ajudo meus colegas de trabalho.
        </p>
      </ContentContainer>
    </WhoAmIContainer>
  );
}
