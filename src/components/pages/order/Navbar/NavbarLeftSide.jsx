import styled from "styled-components";
import { refreshPage } from "../../../../utils/window";
import Logo from "../../../reusable-ui/Logo";
import { devices } from "../../../../enums/devices";

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <Logo className={"logo-order-page"} onClick={() => refreshPage()} />
    </NavbarLeftSideStyled>
  );
}

const NavbarLeftSideStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;

  @media ${devices.xsm} {
    padding-left: 0px;
  }
  .logo-order-page {
    cursor: pointer;
  }
`;
