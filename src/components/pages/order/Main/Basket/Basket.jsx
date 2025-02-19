import styled from "styled-components";
import Total from "./Total";
import BasketFooter from "./BasketFooter";
import { theme } from "../../../../../themes";
import BasketBody from "./BasketBody/BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
      <Total />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;


