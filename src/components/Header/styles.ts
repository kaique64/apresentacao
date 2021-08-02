import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 1;
  ${(props) =>
    props.theme.changeHeader
      ? "background: var(--purple);"
      : "background: none;"}
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;

  h1 {
    color: var(--white);
    font-family: var(--font);
    font-size: 25px;
    margin-left: 28px;
  }

  img {
    width: 85px;
    height: 85px;
    border-radius: 100%;
  }
`;

const lineAnim = keyframes`
  from {
    border-bottom: 0 solid rgba(255, 255, 255, 0);
  }

  to {
    border-bottom: 3px solid rgba(255, 255, 255, 1);
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin: 0 10px;

  a {
    color: var(--white);
    font-family: var(--font);
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
    margin: 0 25px;

    &:hover {
      animation: ${lineAnim} 0.75s;
      border-bottom: 3px solid rgba(255, 255, 255, 1);
    }

    @media (max-width: 1250px) {
      display: none;
    }
  }
`;

export const MenuBar = styled.div`
  display: none;

  @media (max-width: 1250px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    cursor: pointer;
  }
`;

const menuAnim = keyframes`
  from {
    height: 0;
  }

  to {
    height: 30%;
  }
`;

const linkOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const MenuLink = styled.div`
  display: ${(props) => (props.theme.display ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  position: fixed;
  top: 95px;
  right: 0;
  background: var(--purple);
  z-index: 2;
  animation: ${menuAnim} 2s;

  a {
    color: var(--white);
    font-family: var(--font);
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
    margin: 10px 0;
    animation: ${linkOpacity} 0.75s;

    &:hover {
      animation: ${lineAnim} 0.75s;
      border-bottom: 3px solid rgba(255, 255, 255, 1);
    }
  }
`;
