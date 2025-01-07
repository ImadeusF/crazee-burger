import { Link, useParams } from "react-router";
import { theme } from "../../../themes";
import styled from "styled-components";

export default function OrderPage() {
  const { username } = useParams(); //paramètres de l'url
  // useParams renvoi un objet, on peut déstructurer pour récupérer la valeur de la clé inputValue

  return (
    <OrderPageStyle>
      <div className="container">
        <div className="navbar">
          Navbar
          <h1>Hey, {username}</h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <div className="main">Main</div>
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
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;

    .navbar {
      height: 10vh;
    }

    .main {
      background: green;
      flex: 1;
    }
  }
`;
