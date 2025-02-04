import { findObjectById } from '../../../../../utils/array';

export const calculateSumToPay = (basket, menu) => {
    return basket.reduce((total, basketProduct) => {
      const menuProduct = findObjectById(basketProduct.id, menu);
      total += menuProduct.price * basketProduct.quantity;
      return total;
    }, 0);
  }