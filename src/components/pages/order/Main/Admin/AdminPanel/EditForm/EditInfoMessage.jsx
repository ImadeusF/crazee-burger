import styled from "styled-components";
import { theme } from "../../../../../../../themes";

export default function EditInfoMessage({ themeColor }) {
  return (
    <EditInfoMessageStyled $themeColor={themeColor}>
      Cliquer sur un produit du menu pour le modifier {""}
      <span className="live-update">en temps réel</span>
    </EditInfoMessageStyled>
  );
}

const EditInfoMessageStyled = styled.span`
  color: ${({ $themeColor }) => $themeColor};
  font-size: ${theme.fonts.size.SM};

  .live-update {
    text-decoration: underline;
  }
`;
