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
  justify-content: space-between;
  margin: ${pixelToRem(86)} 0 ${pixelToRem(95)} ${pixelToRem(160)};
`;
