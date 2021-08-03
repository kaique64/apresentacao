import React from "react";
import { MdMap } from "react-icons/md";
import { SocialMedia, SocialMediaContainer, FooterContainer } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <a href="https://github.com/kaique64" target="_blank" rel="noreferrer">
          <SocialMedia>
            <img src="/images/icons/github.svg" alt="GitHub" />
          </SocialMedia>
        </a>
        <h1> GitHub </h1>
        <p> kaique64 </p>
      </SocialMediaContainer>
      <SocialMediaContainer>
        <SocialMedia>
          <MdMap size={35} color="var(--purple)" />
        </SocialMedia>
        <h1> Endereço </h1>
        <p> Sumaré, SP </p>
      </SocialMediaContainer>
      <SocialMediaContainer>
        <a
          href="https://www.linkedin.com/in/kaique-henrique"
          target="_blank"
          rel="noreferrer"
        >
          <SocialMedia>
            <img src="/images/icons/linkedin.svg" alt="LinkedIn" />
          </SocialMedia>
        </a>
        <h1> LinkedIn </h1>
        <p> Kaique Henrique </p>
      </SocialMediaContainer>
    </FooterContainer>
  );
}
