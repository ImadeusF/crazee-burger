import { useParams } from "react-router";
import { theme } from "../../../themes";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  }

  return (
    <OrderContext.Provider value={ orderContextValue }>
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
