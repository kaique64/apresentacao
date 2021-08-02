import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MessageLabel = styled.label`
  max-width: 1660px;
  width: 100%;
  font-family: var(--font);
  font-size: 25px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 20px;

  @media (max-width: 1250px) {
    font-size: 22px;
  }
`;

export const MessageInput = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 1660px;
  width: 100%;
  height: 350px;
  border-radius: 10px;
  border: 2px solid
    ${(props) => (props.theme.error ? "var(--red)" : "var(--purple)")};
  font-family: var(--font);
  font-size: 20px;
  padding: 15px;
  outline: none;
  transition: 0.15s ease-in-out;

  &:focus {
    border: 3px solid var(--purple);
  }

  @media (max-width: 1250px) {
    font-size: 18px;
  }
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1660px;
  width: 100%;
  height: 75px;
  font-family: var(--font);
  font-size: 30px;
  font-weight: 600;
  color: var(--white);
  margin-top: 30px;
  border-radius: 10px;
  background: ${(props) => (props.theme.bg ? props.theme.bg : "var(--purple)")};
  transition: 0.3s ease-in-out;
  cursor: ${(props) => (props.theme.bg ? "not-allowed" : "pointer")};

  ${(props) =>
    props.theme.bg
      ? ""
      : `
    &:hover {
      background: var(--dark-purple);
    }
  `}
`;

export const TitlePositionContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 1700px;
  width: 100%;
`;

export const WarnMessage = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 95%;
  margin-top: 10px;
  font-family: var(--font);
  font-size: 20px;
  color: var(--red);
`;
