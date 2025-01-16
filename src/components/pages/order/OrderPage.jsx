import { theme } from "../../../themes";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected]= useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  
  const handleAdd = (newProduct) => {
    const menuCopy = [...menu];
    const menuUpdated = [newProduct, ...menuCopy]
    setMenu(menuUpdated);
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyle>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyle>
    </OrderContext.Provider>
  );
}

const OrderPageStyle = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
