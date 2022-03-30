import styled from "styled-components";
import pixelToRem from "../../config/pxToRem";

export const Container = styled.main`
  background-color: var(--home-background);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${pixelToRem(32)};
  margin: ${pixelToRem(86)} 0 ${pixelToRem(95)} ${pixelToRem(100)};
`;

export const Dashborder = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pixelToRem(31)};
  width: 60%;
`;
