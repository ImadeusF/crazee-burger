import { Link } from "react-router";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="leftside">Left</div>
      <div className="rightside">
        Right
        <h1>Hey, {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  .leftside {
    background: pink;
  }

  .rightside {
    background: purple;
  }
`;
