import styled from "styled-components";
import { theme } from "../../../../themes";

export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled>
      <div className="produit">
        <div className="image">
          <img src={imageSource} alt={title} />
        </div>
        <div className="info-texte">
          <div className="description">
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <button className="add-button">Ajouter</button>
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
 .produit {
    background: ${theme.colors.white};
    width: 240px;
    height: 330px;


    .image {
      border: 1px solid black;

      
      img {
        width: 100px;
        height: auto;object-fit: contain;
      }
    }

    .description {
      border: 1px solid black;
    }
  }
`;
