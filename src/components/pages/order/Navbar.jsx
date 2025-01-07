import { Link } from "react-router";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      Navbar
      <h1>Hey, {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
`;
