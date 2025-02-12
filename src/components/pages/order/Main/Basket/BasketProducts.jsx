import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { findObjectById } from "../../../../../utils/array";
import { checkIfProductIsSelected } from "../Menu/helper";

export default function BasketProducts() {
const { 
  username,
  basket,
  isModeAdmin,
  handleDeleteBasketProduct,
  menu,
  handleProductSelected,
  productSelected,
 } = useContext(OrderContext);


  const handleOnDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteBasketProduct(id, username);
  }

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct= findObjectById(basketProduct.id, menu);
        return (
       <div className="basket-card" key={basketProduct.id}>
         <BasketCard 
         {...menuProduct} 
         imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON} 
         quantity={basketProduct.quantity}
         onDelete={(e) => handleOnDelete(e, basketProduct.id)}
         $isClickable={isModeAdmin}
         onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
         $isSelected={checkIfProductIsSelected(basketProduct.id, productSelected.id)}
         />
       </div>
      )})}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;

    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
