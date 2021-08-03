import styled, { keyframes } from "styled-components";

const loadAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerLoader = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: none;
  animation: ${loadAnim} 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-bottom-color: var(--white);
  }
`;
