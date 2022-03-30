import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Menu = styled.div`
  width: 100%;
  display: flex;
  height: ${pixelToRem(68)};
  gap: ${pixelToRem(40)};
  justify-content: space-between;

  border-bottom: 2px solid #dce2e6;
  .form {
    .pesquisa {
      background: #ffffff;
      border: 1px solid #dce2e6;
      box-sizing: border-box;
      border-radius: 5px;
      height: ${pixelToRem(53)};
      width: ${pixelToRem(272)};
      padding-left: ${pixelToRem(42)};

      font-family: "Roboto";
      font-weight: 400;
      font-size: 14px;
      line-height: 26px;
      color: #a0acb3;
      outline: none;
      z-index: 1;

      &::placeholder {
        color: #a0acb3;
      }
    }

    .img-seacher {
      z-index: 2;
      margin: ${pixelToRem(20)} ${pixelToRem(13)};
      position: absolute;
    }
  }

  .options {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    .ativo {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      color: #3d3d4c;
      border-bottom: 2px solid #f25d27;
      height: 33px;
    }
    .desativado {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      /* or 162% */

      /* Textos / Complemento */

      color: #a0acb3;
    }
  }

  .exibicao {
    button {
      width: 39px;
      height: 39px;
      background: #ffffff;
      border: 1px solid #dce2e6;
      border-radius: 5px 0px 0px 5px;
    }
    .bloco {
      border-radius: 0px 5px 5px 0px;
    }
    img {
      width: 15px;
      height: 15px;
    }
  }
`;
