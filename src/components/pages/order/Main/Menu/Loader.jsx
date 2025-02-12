import styled from "styled-components";
import { theme } from "../../../../../themes";

export default function Loader() {
  return (
    <LoaderStyles>
      <span className="title">Chargement en cours ...</span>
    </LoaderStyles>
  );
}

const LoaderStyles = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    text-align: center;
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
  }
`;
