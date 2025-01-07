import { useParams } from "react-router";
import { theme } from "../../../themes";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";

export default function OrderPage() {
  const { username } = useParams(); //paramètres de l'url
  // useParams renvoi un objet, on peut déstructurer pour récupérer la valeur de la clé inputValue

  return (
    <OrderPageStyle>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyle>
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
