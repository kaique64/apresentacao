import styled from "styled-components";

export const WhoAmIContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 255px;

  img {
    margin-right: 356px;
  }

  @media (max-width: 1250px) {
    img {
      height: 350px;
      margin: 0 25px;
    }
  }

  @media (max-width: 850px) {
    img {
      display: none;
    }
  }

  @media (max-width: 464px) {
    img {
      display: none;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 650px;
  width: 100%;

  p {
    font-family: var(--font);
    font-size: 25px;
    text-align: right;
  }

  @media (max-width: 1250px) {
    margin: 0 25px;

    p {
      font-size: 20px;
    }
  }
`;
