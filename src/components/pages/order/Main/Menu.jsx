import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../themes";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import AdminContext from "../../../../context/AdminContext";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  return (
    <MenuStyled>
      {menu.map(({id, title, imageSource, price}) => {
        return (
           <Card
             key={id}
             title={title}
             imageSource={imageSource}
             leftDescription={formatPrice(price)}
           />  
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
