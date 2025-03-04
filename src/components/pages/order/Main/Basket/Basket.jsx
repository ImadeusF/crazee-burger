import styled from "styled-components";
import BasketHeader from "./BasketHeader/BasketHeader";
import BasketFooter from "./BasketFooter";
import { theme } from "../../../../../themes";
import BasketBody from "./BasketBody/BasketBody";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { devices } from "../../../../../enums/devices";

export default function Basket() {
  const { isBasketSmallDevicesActive } = useContext(OrderContext);

  return (
    <BasketStyled $isBasketSmallDevicesActive={isBasketSmallDevicesActive}>
      <BasketHeader />
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
  overflow-y: auto;

  @media ${devices.md} {
    position: absolute;
    top: 15vh;
    left: 0;
    width: 100%;
    height: ${({ $isBasketSmallDevicesActive }) => ($isBasketSmallDevicesActive ? "85vh" : "0")};
    overflow: hidden;
    background: ${theme.colors.background_white};
    z-index: 1;
    box-shadow: ${({ $isBasketSmallDevicesActive }) => ($isBasketSmallDevicesActive ? theme.shadows.large : "none")};
    transition: height 0.3s ease;
  }

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


