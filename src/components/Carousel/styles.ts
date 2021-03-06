import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.secondColor},
    ${(props) => props.theme.color}
  );
  width: 400px;
  height: 734px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px ${(props) => props.theme.color};
  font-family: var(--font);
  color: var(--white);

  h1 {
    font-size: 25px;
    margin: 10px 0;
  }

  p {
    font-size: 15px;
    max-width: 350px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 1024px) {
    width: 410px;
    h1 {
      font-size: 25px;
    }

    p {
      max-width: 250px;
      width: 100%;
      font-size: 15px;
    }
  }

  @media (max-width: 464px) {
    width: 300px;
    h1 {
      font-size: 28px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: var(--white);
  border-radius: 100%;
`;
