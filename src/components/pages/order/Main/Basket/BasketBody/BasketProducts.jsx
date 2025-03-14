import styled from "styled-components";
import BasketCard from "./BasketCard";
import {
  BASKET_MESSAGE,
  IMAGE_COMING_SOON,
} from "../../../../../../enums/product";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { findObjectById } from "../../../../../../utils/array";
import { checkIfProductIsSelected } from "../../Menu/helper";
import { motion, AnimatePresence } from "motion/react";
import { formatPrice } from "../../../../../../utils/maths";
import { convertStringToBoolean } from "../../../../../../utils/string";
import Sticker from "../../../../../reusable-ui/Sticker";

export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
    themeColor
  } = useContext(OrderContext);

  const handleOnDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <BasketProductsStyled>
      <AnimatePresence>
        {basket.length > 0 &&
          basket.map((basketProduct) => {
            const menuProduct = findObjectById(basketProduct.id, menu);
            return (
              <motion.div
                key={basketProduct.id}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-container">
                  {convertStringToBoolean(menuProduct.isPublicised) && (
                    <Sticker className="badge-new" />
                  )}

                  <BasketCard
                    {...menuProduct}
                    imageSource={
                      menuProduct.imageSource
                        ? menuProduct.imageSource
                        : IMAGE_COMING_SOON
                    }
                    quantity={basketProduct.quantity}
                    onDelete={(e) => handleOnDelete(e, basketProduct.id)}
                    $isClickable={isModeAdmin}
                    onClick={
                      isModeAdmin
                        ? () => handleProductSelected(basketProduct.id)
                        : null
                    }
                    $isSelected={checkIfProductIsSelected(
                      basketProduct.id,
                      productSelected.id
                    )}
                    price={
                      convertStringToBoolean(menuProduct.isAvailable)
                        ? formatPrice(menuProduct.price)
                        : BASKET_MESSAGE.NOT_AVAILABLE
                    }
                    //de base isAvailable is a string
                    themeColor={themeColor}
                  />
                </div>
              </motion.div>
            );
          })}
      </AnimatePresence>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    position: relative;
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;

    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }

  .badge-new {
    position: absolute;
    z-index: 1;
    bottom: 10%;
    left: 21%;
    transform: translateX(-21%);
    transform: translateY(-5%);
  }
`;
