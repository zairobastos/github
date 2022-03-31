import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const PerfilCard = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pixelToRem(352)};
  height: ${pixelToRem(551)};
  background-color: var(--home-perfil);
  border: ${pixelToRem(1)} solid var(--home-perfil-border);
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
    width: 90%;
    flex-direction: column;
    align-items: center;
    gap: ${pixelToRem(11)};
    h1 {
      font-family: "IBM Plex Sans", sans-serif;
      color: var(--home-perfil-h1);
      font-weight: 600;
      font-size: ${pixelToRem(28)};
      line-height: ${pixelToRem(30)};
    }
    h3 {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: ${pixelToRem(20)};
      line-height: ${pixelToRem(23)};
      color: var(--home-perfil-h3);
    }
    p {
      font-family: "Roboto";
      font-weight: 400;
      font-size: ${pixelToRem(20)};
      line-height: ${pixelToRem(23)};
      color: var(--home-perfil-p);
      text-align: center;
    }
  }
  .dados {
    margin-top: ${pixelToRem(52)};
    border-top: ${pixelToRem(1)} solid #9c98a6;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${pixelToRem(29)};

    h2 {
      font-family: "Roboto";
      font-weight: 700;
      font-size: ${pixelToRem(36)};
      line-height: ${pixelToRem(42)};
      color: var(--home-perfil-h2);
      display: flex;
      flex-direction: column;
      gap: ${pixelToRem(2)};
      align-items: center;

      span {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 1rem;
        line-height: ${pixelToRem(19)};
        color: var(--home-perfil-span);
      }
    }
  }
`;
