/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Loader from "../Loader";
import useProfileInfo from "../../hooks/useProfileInfo";
import {
  HeaderContainer,
  ProfileContainer,
  Links,
  MenuBar,
  MenuLink,
} from "./styles";

export default function Header() {
  const { data, loading } = useProfileInfo();
  const [display, setDisplay] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setChangeHeader(document.documentElement.scrollTop > 100);
    };
  }, []);

  return (
    <>
      <MenuLink theme={{ display }}>
        <a href="#home"> Home </a>
        <a href="#who-am-i"> Quem sou </a>
        <a href="#knowledge"> Conhecimentos </a>
        <a href="#contact"> Contato </a>
      </MenuLink>
      <HeaderContainer theme={{ changeHeader }}>
        <ProfileContainer>
          {loading ? <Loader /> : <img src={data.avatar_url} />}
          <h1> {data.name} </h1>
        </ProfileContainer>
        <Links>
          <a href="#home"> Home </a>
          <a href="#who-am-i"> Quem sou </a>
          <a href="#knowledge"> Conhecimentos </a>
          <a href="#contact"> Contato </a>
        </Links>
        <MenuBar
          onClick={() => (display ? setDisplay(false) : setDisplay(true))}
        >
          {!display ? (
            <MdMenu size={35} color="var(--white)" />
          ) : (
            <MdClose size={35} color="var(--white)" />
          )}
        </MenuBar>
      </HeaderContainer>
    </>
  );
}
