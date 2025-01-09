import styled from "styled-components";
import { theme } from "../../../../themes";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths";

export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled>
      <div className="produit">
        <div className="image">
          <img src={imageSource} alt={title} />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{formatPrice(price)}</div>
            <div className="right-description">
              <PrimaryButton className="primary-button" label={"Ajouter"} />
            </div>
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
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 30px;
    box-sizing: border-box;

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;
  

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: px;
    font-size: ${theme.fonts.size.P4};
    bottom: 10px;
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.dark};
    text-align: left;
    width: 100%;
    font-family: "Amatic SC", cursive;

    .title {
      max-width: 200px;
      height:50px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-top: 20px; 

      
      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};
      }

      .primary-button {
        
      }
    }
  }
`;
