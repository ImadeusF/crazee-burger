import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

const handleAddToBasket = (productToAdd) => {
 
}


  return {
    basket, handleAddToBasket
  };
};
