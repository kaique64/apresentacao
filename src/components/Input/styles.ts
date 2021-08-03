import styled from "styled-components";

export const FormLabel = styled.label`
  max-width: 1200px;
  width: 100%;
  font-family: var(--font);
  font-size: 20px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 20px;

  @media (max-width: 1250px) {
    font-size: 22px;
  }
`;

export const FormInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 1200px;
  width: 100%;
  height: 65px;
  border-radius: 10px;
  border: 2px solid
    ${(props) => (props.theme.error ? "var(--red)" : "var(--purple)")};
  font-family: var(--font);
  font-size: 20px;
  padding-left: 15px;
  outline: none;
  transition: 0.15s ease-in-out;

  &:focus {
    border: 3px solid var(--purple);
  }

  @media (max-width: 1250px) {
    font-size: 18px;
  }
`;
