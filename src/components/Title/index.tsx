/* eslint-disable react/require-default-props */
import React from "react";
import { TitlePosition, Title, Subline } from "./styles";

interface IDesc {
  title: string;
  right: boolean;
}

export default function Desc({ title, right }: IDesc) {
  return (
    <TitlePosition theme={{ right }}>
      <Title> {title} </Title>
      <Subline />
    </TitlePosition>
  );
}
