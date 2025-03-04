import styled from "styled-components";
import { theme } from "../../../themes";
import { devices } from "../../../enums/devices";

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h1>Bienvenue chez nous!</h1>
      <hr />
      <h2>Connectez-vous</h2>
    </WelcomeStyled>
  );
}

const WelcomeStyled = styled.div`
  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
    
    @media ${devices.xs} {
      font-size: ${theme.fonts.size.P4};
    }
  }

  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
  }
`;
