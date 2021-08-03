import styled from "styled-components";

export const WhoAmIContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 255px;

  img {
    margin-left: 15px;
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
  max-width: 500px;
  width: 100%;
  margin-left: 250px;

  p {
    font-family: var(--font);
    font-size: 15px;
    text-align: right;
  }

  @media (max-width: 1250px) {
    margin: 0;
  }
`;
