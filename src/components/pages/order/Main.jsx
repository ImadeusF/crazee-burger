import styled from "styled-components";
import { theme } from "../../../themes";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function Main() {
  return (
    <MainStyled className="main">
      <div className="basket">Basket</div>
      <div className="menu">Menu</div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: auto;

  .basket {
    background: pink;
  } 

  .menu {
    background: purple;
  }
`;
