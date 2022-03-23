import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Container = styled.div`
  display: flex;
  gap: ${pixelToRem(20)};
  flex-direction: column;
  margin-bottom: ${pixelToRem(22)};
`;

export const Text = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: ${pixelToRem(36)};
  line-height: ${pixelToRem(46)};
  color: var(--login-h1);
  width: ${pixelToRem(288)};
`;

export const TextP = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: ${pixelToRem(16)};
  line-height: ${pixelToRem(26)};
  color: var(--login-p);
  width: ${pixelToRem(279)};
`;
