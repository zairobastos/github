import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Inputi = styled.input`
  width: ${pixelToRem(352)};
  height: ${pixelToRem(72)};
  background: var(--login-background-input);
  border: ${pixelToRem(1)} solid var(--login-border-input);
  box-sizing: border-box;
  border-radius: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: ${pixelToRem(20)};
  padding-left: ${pixelToRem(24)};

  &::placeholder {
    color: var(--login-font-input);
  }
`;

export const Buton = styled.button`
  width: ${pixelToRem(352)};
  height: ${pixelToRem(56)};
  font-family: "Archivo", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: ${pixelToRem(26)};
  text-align: center;
  color: var(--login-button-font);
  background-color: var(--login-button);
  border-radius: ${pixelToRem(8)};
  border: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${pixelToRem(22)};
`;
