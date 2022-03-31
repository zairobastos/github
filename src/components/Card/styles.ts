import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Cardi = styled.div`
  width: 31.2%;
  background-color: var(--home-card-background);
  border: ${pixelToRem(1)} solid var(--home-card-border);
  box-sizing: border-box;
  border-radius: ${pixelToRem(5)};
  height: ${pixelToRem(215)};
  margin-bottom: ${pixelToRem(20.08)};
  padding: 24.73px ${pixelToRem(21.67)} ${pixelToRem(23)} ${pixelToRem(12.71)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    display: flex;
    justify-content: flex-start;
    gap: ${pixelToRem(16.84)};
    width: 99%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: ${pixelToRem(14)};
    line-height: ${pixelToRem(16)};
    color: var(--home-card-h2);

    span {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 600;
      font-size: ${pixelToRem(16)};
      line-height: ${pixelToRem(26)};
      color: var(--home-card-span);
    }
  }

  .p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: ${pixelToRem(14)};
    line-height: ${pixelToRem(16)};
    color: var(--home-card-span);
    margin-top: ${pixelToRem(7.81)};
    margin-left: calc(${pixelToRem(34)} - ${pixelToRem(9)});
  }

  .estrela {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 0;
    .user-stars {
      display: flex;
      height: ${pixelToRem(40)};
      flex-direction: column;
      margin-left: calc(${pixelToRem(34)} - ${pixelToRem(9)});

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: ${pixelToRem(12)};
        line-height: ${pixelToRem(22)};
        text-transform: uppercase;
        color: var(--home-card-span);
      }

      figure {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: ${pixelToRem(6)};
        img {
          width: ${pixelToRem(15.23)};
          height: ${pixelToRem(14.52)};
        }

        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: ${pixelToRem(16)};
          line-height: ${pixelToRem(26)};
          color: var(--home-card-span);
        }
      }
    }
    button {
      width: ${pixelToRem(40)};
      height: ${pixelToRem(40)};
      background: #fcfdff;
      border: ${pixelToRem(2.5)} solid #f47b50;
      box-sizing: border-box;
      border-radius: ${pixelToRem(5)};
    }
  }
`;
