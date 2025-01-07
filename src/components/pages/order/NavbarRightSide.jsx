import { Link } from "react-router";
import styled from "styled-components";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
    Right
    <h1>Hey, {username}</h1>
    <Link to="/">
      <button>Déconnexion</button>
    </Link>
  </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    background: purple;
`;