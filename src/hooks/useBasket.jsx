import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, find } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket =
      find(productToAdd.id, basketCopy) !== undefined; //undefined permet de renvoyer true ou false
    console.log("isProductAlreadyInBasket", isProductAlreadyInBasket);

    if (!isProductAlreadyInBasket) {
      const newBastketProduct = {
        ...productToAdd,
        quantity: 1,
      };
      const basketUpdated = [...basketCopy, newBastketProduct];

      setBasket(basketUpdated);
    }
    

  };

  return {
    basket,
    handleAddToBasket,
  };
};
