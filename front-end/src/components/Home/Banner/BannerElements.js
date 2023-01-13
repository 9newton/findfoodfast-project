import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

// const ScrollAnimation = keyframes`
//   0%,
//   20%,
//   50%,
//   80%,
//   100% {
//     transform: translateY(0);
//   }
//   40% {
//     transform: translateY(-20px);
//   }
//   60% {
//     transform: translateY(-10px);
//   }
// `;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #222c61;
`;
