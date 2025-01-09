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
          <div className="title">{title}</div>
          <div className="description">
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
    width: 200px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;

    .image {
      border: 1px solid black;
      width: 100%;
      height: auto;
      margin-top: 30px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .description {
    border: 1px solid blue;
  }
`;
