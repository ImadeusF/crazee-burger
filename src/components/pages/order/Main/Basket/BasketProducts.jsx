import styled from "styled-components";

export default function BasketProducts() {
  return (
    <BasketProductsStyled>
      <span>Liste des produits</span>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
 background-color: red;
`;
