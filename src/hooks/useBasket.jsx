import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, find } from "../utils/array";
import { BiBasket } from "react-icons/bi";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket =
      find(productToAdd.id, basketCopy) !== undefined; //undefined permet de renvoyer true ou false

    if (!isProductAlreadyInBasket) {
      const newBastketProduct = {
        ...productToAdd,
        quantity: 1,
      };
      const basketUpdated = [...basketCopy, newBastketProduct];

      setBasket(basketUpdated);
    } else {
      const indexOfBasketPorductToIncrement = basket.findIndex((basketProduct) => basketProduct.id === productToAdd.id);
      basketCopy[indexOfBasketPorductToIncrement].quantity += 1;
      setBasket(basketCopy);
    }
  };

  return {
    basket,
    handleAddToBasket,
  };
};
