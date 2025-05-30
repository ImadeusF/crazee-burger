import styled, { css } from "styled-components";
import { theme } from "../../../../../../themes";
import { MdDeleteForever } from "react-icons/md";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";

export default function BasketCard({
  title,
  price,
  quantity,
  imageSource,
  className,
  $isClickable,
  onClick,
  onDelete,
  $isSelected,
  themeColor,
}) {
  return (
    <BasketCardStyled
      className={className}
      $isClickable={$isClickable}
      onClick={onClick}
      $isSelected={$isSelected}
      $themeColor={themeColor}
    >
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">{price}</span>
        </div>
        <div className="quantity">
          <CasinoEffect count={`x ${quantity}`} />
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};
  box-sizing: border-box;
  height: 86px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.cardBasket};

  position: relative;

  .image {
    box-sizing: border-box;
    height: 70px;

    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.fonts.size.P0};
    color: ${({ $themeColor }) => $themeColor};

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;

      .title {
        display: flex;
        align-items: center;
        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P3};
        line-height: 32px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        min-width: 0; //pour l'ellipsis

        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
    }

    .price {
      font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.medium};
      font-family: ${theme.fonts.family.openSans};
     //ellipsis
      white-space: nowrap;
      overflow: hidden; 
      text-overflow: ellipsis;
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  &:hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }
      /* Behaviour on delete-button hover */
      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }
        &:active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
  ${({ $isClickable, $isSelected }) =>
    $isClickable && $isSelected && selectedStyle}
`;

const selectedStyle = css`
  background: ${({ $themeColor }) => $themeColor};
  .price,
  .quantity {
    color: ${theme.colors.white};
  }
`;
