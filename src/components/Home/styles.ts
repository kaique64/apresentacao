import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/triangle.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 650px;

  @media (max-width: 1250px) {
    height: 750px;
  }
`;

export const HomeImg = styled.img`
  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 1250px) {
    height: 350px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 650px;
  width: 100%;
  font-family: var(--font);
  color: var(--white);
  margin-left: 75px;

  h1 {
    font-size: 35px;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 1250px) {
    margin-left: 25px;
    h1 {
      font-size: 35px;
    }

    p {
      font-size: 20px;
    }
  }
`;
