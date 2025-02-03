import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  findObjectById,
  findIndexById,
  removeObjectById,
} from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (idProductToAdd) => {
    const basketCopy = deepClone(basket);
    const productAlreadyinBasket = findObjectById(idProductToAdd, basketCopy);
    console.log(productAlreadyinBasket);

    if (productAlreadyinBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy);
      return;
    }
    createNewBasketProduct(idProductToAdd, basketCopy, setBasket);
  };

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
  }

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketCopy = deepClone(basket);
    const basketUpdated = removeObjectById(idBasketProduct, basketCopy);
    setBasket(basketUpdated);
  };

  return {
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
  };
};


