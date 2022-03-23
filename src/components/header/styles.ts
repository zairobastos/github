import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Cabecalho = styled.header`
  display: flex;
  width: 100%;
  height: ${pixelToRem(88)};
  background-color: var(--home-header);
  align-items: center;
  padding-left: ${pixelToRem(161)};
  gap: ${pixelToRem(370)};

  figure {
    display: flex;
    align-items: center;
    gap: ${pixelToRem(24)};

    h2 {
      color: var(--home-header-font);
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: ${pixelToRem(24)};
      line-height: ${pixelToRem(46)};
    }
  }

  .voltar {
    width: ${pixelToRem(24)};
    height: ${pixelToRem(24)};
  }
`;
