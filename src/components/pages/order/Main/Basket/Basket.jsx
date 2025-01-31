import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import EmptyBasket from "./EmptyBasket";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";
import { theme } from "../../../../../themes";

export default function Basket() {
  const { basket, isModeAdmin } = useContext(OrderContext);

  const isBasketEmpty = basket.length === 0;

const sumToPay = basket.reduce((total, basketProduct) => {
  total += basketProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(sumToPay)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} isModeAdmin={isModeAdmin}/>}
      <Footer />
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
