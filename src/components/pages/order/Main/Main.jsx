import styled from "styled-components";
import { theme } from "../../../../themes";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Basket from "./Basket/Basket";
import { motion } from "motion/react";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled className="main">
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Admin />
          </motion.div>
        )}
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

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
