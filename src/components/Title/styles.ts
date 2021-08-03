import styled, { keyframes } from "styled-components";

export const TitlePosition = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.theme.right
      ? `
      align-items: flex-end;
      justify-content: flex-end;
      max-width: 1250px;
      width: 100%
    `
      : `
      align-items: flex-start;
      justify-content: flex-start;
      margin-left: 50px
    `}
`;

export const Title = styled.h1`
  font-family: var(--font);
  font-size: 35px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 464px) {
    font-size: 20px;
  }
`;

const lineAnim = keyframes`
  from {
    width: 0;
  }

  to {
    width: 60px;
  }
`;

export const Subline = styled.div`
  height: 10px;
  width: 60px;
  animation: ${lineAnim} 2s;
  background: var(--dark-purple);
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 35px;
`;
