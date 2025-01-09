import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../themes";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((produit) => {
        return (
          <div className="produit" key={produit.id}>
            <div className="image">
              <img src={produit.imageSource} alt={produit.title} />
            </div>
            <div className="info-texte" >
              <div className="title">{produit.title}</div>
              <div className="description">
                <div className="price">{produit.price}</div>
                <button className="add-button">Ajouter</button>
              </div>
            </div>
          </div>
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

  .produit {
    background: red;
    width: 240px;
    height: 330px;

    .image {
      width: 200px;
      height: 245px;
      img {
        width: 100px;
        height: auto;
      }
    }
  }
`;
