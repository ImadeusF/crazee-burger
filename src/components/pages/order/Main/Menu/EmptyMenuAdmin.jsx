import styled from "styled-components";
import { theme } from "../../../../../themes";
import Button from "../../../../reusable-ui/Button";

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyle>
      <span className="title">Le menu est vide ?</span>
      <span className="description">
        Cliquez ci-dessous pour le réinitialiser
      </span>
      <Button label={"Générer de nouveaux produits"} onClick={onReset} />
    </EmptyMenuAdminStyle>
  );
}

const EmptyMenuAdminStyle = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
  }

  .title {
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    margin-top:20px;
  }

 button {
 margin-top: 30px;
 font-size: ${theme.fonts.size.XS};
 width:auto;
 }
`;
