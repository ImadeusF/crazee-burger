import styled from "styled-components";
import { theme } from "../../../../../themes";

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">Votre commande est vide.</span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.div`
  display:flex;
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  .empty-message {
    /* height: calc(95vh - 10vh -140px); */
    text-align: center;
    flex: 1;
    justify-content: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
