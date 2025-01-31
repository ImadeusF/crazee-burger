import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, find, findIndex } from "../utils/array";
import { BiBasket } from "react-icons/bi";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);
    const isProductAlreadyInBasket =
      find(productToAdd.id, basketCopy) !== undefined; //undefined permet de renvoyer true ou false

    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket);
      return;
    }
    incrementProductAlreadyInBasket(productToAdd,basketCopy);
  };
  
  const incrementProductAlreadyInBasket = (productToAdd,basketCopy) => {
    const indexOfBasketPorductToIncrement = findIndex(productToAdd.id, basketCopy);
    basketCopy[indexOfBasketPorductToIncrement].quantity += 1;
    setBasket(basketCopy);
  }

  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBastketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBastketProduct, ...basketCopy, ];
    setBasket(basketUpdated);
  }

  return {
    basket,
    handleAddToBasket,
  };
};

