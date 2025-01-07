import { Link, useParams } from "react-router";
import { theme } from "../../../themes";
import styled from "styled-components";

export default function OrderPage() {
  const { username } = useParams(); //paramètres de l'url
  // useParams renvoi un objet, on peut déstructurer pour récupérer la valeur de la clé inputValue

  return (
    <OrderPageStyle>
      <div className="container">
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </OrderPageStyle>
  );
}

const OrderPageStyle = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;

  .container {
    background: ${theme.colors.white};
    height: 95vh;
    width:1400px;F
  }
`;
