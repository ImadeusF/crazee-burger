import styled from "styled-components";
import { theme } from "../../../../themes";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { devices } from "../../../../enums/devices";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function BasketShop() {
  const { basket } = useContext(OrderContext);

  const emptyBasket = basket.length === 0;

  const totalProductsInBasket = basket.reduce((total, basket) => {
    total += basket.quantity;
    return total;
  }, 0);

  return (
    <BasketShopStyled>
      <button className="btn-store" aria-label="Admin-store">
        {emptyBasket ? null : (
          <span className="basket-quantity">{totalProductsInBasket}</span>
        )}

        <MdOutlineLocalGroceryStore />
      </button>
    </BasketShopStyled>
  );
}

const BasketShopStyled = styled.div`
  .btn-store {
    position: relative;
    border: none;
    background: none;
    font-size: 1.35rem;
    color: ${theme.colors.greyBlue};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.primary};
    }

    .basket-quantity {
      position: absolute;
      top: -5px;
      right: -4px;
      font-size: 0.7rem;
    }
  }

  .btn-store {
    @media ${devices.lg} {
      display: none;
    }
    @media ${devices.md} {
      display: flex;
    }
  }
`;
