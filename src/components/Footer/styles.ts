import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 100%;
  background: var(--purple);
  margin-top: 100px;
  color: var(--white);
  padding: 47px 0;

  h1 {
    font-family: var(--font);
    font-size: 25px;
    margin: 20px 29px;
  }

  p {
    font-family: var(--font);
    font-size: 25px;
    margin: 0 29px;
  }

  @media (max-width: 1250px) {
    h1 {
      display: none;
    }

    p {
      display: none;
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 18px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: var(--white);
  height: 100px;
  width: 100px;
  margin: 0 75px;

  @media (max-width: 1250px) {
    height: 100px;
    width: 100px;
    margin: 0 40px;
  }

  @media (max-width: 464px) {
    height: 100px;
    width: 100px;
    margin: 0 10px;
  }
`;
