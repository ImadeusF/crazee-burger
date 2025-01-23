import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
