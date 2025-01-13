import styled from "styled-components";
import { theme } from "../../../../themes";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext);

  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
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
  grid-template-columns: 1fr;

  /* .basket {
    background: pink;
  } */

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
