import styled from "styled-components";

export const MessageContainer = styled.div`
  display: ${(props) => props.theme.display};
  align-items: center;
  justify-content: center;
  max-width: 1660px;
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background: ${(props) =>
    props.theme.error ? "var(--light-red)" : "var(--green)"};
  margin: 10px 0;

  h1 {
    font-family: var(--font);
    font-size: 22px;
  }

  svg {
    margin: 0 25px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`;
