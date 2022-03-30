import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Dashborder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3%;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 31.2%;
  background-color: var(--home-card-background);
  border: 1px solid #e1e3e6;
  box-sizing: border-box;
  border-radius: 5px;
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
    font-size: 14px;
    line-height: 16px;
    color: #32264d;

    span {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #9c98a6;
    }
  }

  .p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #9c98a6;
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
        font-size: 12px;
        line-height: 22px;
        text-transform: uppercase;
        color: #9c98a6;
      }

      figure {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 6px;
        img {
          width: 15.23px;
          height: 14.52px;
        }

        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 26px;
          color: #9c98a6;
        }
      }
    }
    button {
      width: ${pixelToRem(40)};
      height: ${pixelToRem(40)};
      background: #fcfdff;
      border: 2.5px solid #f47b50;
      box-sizing: border-box;
      border-radius: 5px;
    }
  }
`;