import styled from "styled-components";
import { theme } from "../../../../themes";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Basket from "./Basket/Basket";
import { devices } from "../../../../enums/devices";

export default function Main() {
  const { isModeAdmin, isBasketSmallDevicesActive } = useContext(OrderContext);

  return (
    <MainStyled className="main" $isBasketSmallDevicesActive={isBasketSmallDevicesActive}>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 25% 1fr;
  overflow: hidden;

  @media ${devices.md} {
    grid-template-columns: ${({ $isBasketSmallDevicesActive }) =>
      $isBasketSmallDevicesActive ? "0% 100%" : "100% 0%"};
  }

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
