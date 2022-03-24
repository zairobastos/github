import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const PerfilCard = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pixelToRem(352)};
  height: ${pixelToRem(551)};
  background-color: var(--home-perfil);
  border: 1px solid var(--home-perfil-border);
  border-radius: ${pixelToRem(5)};
  padding-top: ${pixelToRem(50)};
  align-items: center;

  .perfil {
    width: ${pixelToRem(180)};
    height: ${pixelToRem(180)};
  }

  .info-perfil {
    margin-top: ${pixelToRem(40)};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pixelToRem(11)};
    h1 {
      font-family: "IBM Plex Sans", sans-serif;
      color: var(--home-perfil-h1);
      font-weight: 600;
      font-size: 28px;
      line-height: 30px;
    }
    h3 {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: ${pixelToRem(20)};
      line-height: ${pixelToRem(23)};
      color: var(--home-perfil-h3);
    }
  }
`;
