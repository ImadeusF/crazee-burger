import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  findObjectById,
  findIndexById,
  removeObjectById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (idProductToAdd, username) => {
    const basketCopy = deepClone(basket);
    const productAlreadyinBasket = findObjectById(idProductToAdd, basketCopy);

    if (productAlreadyinBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username);
      return;
    }
    createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username);
  };

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, username) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket, username) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  }

  const handleDeleteBasketProduct = (idBasketProduct, username) => {
    const basketCopy = deepClone(basket); //could be remove because removeObjectById already do a deepClone, if you remove, so use basket instead of basketCopy 
    const basketUpdated = removeObjectById(idBasketProduct, basketCopy);
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketProduct,
  };
};


