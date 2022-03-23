import styled from "styled-components";

export const TelaLogin = styled.header`
  background-color: var(--login-background);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;

  header {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    background-image: url(../../images/Vector.svg);
    background-color: var(--login-icone-fundo);
    width: 40%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
