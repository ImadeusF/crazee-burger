import styled, { css } from "styled-components";
import { theme } from "../../themes";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";

export default function Card({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  $isHoverable,
  $isSelected,
  onAdd,
  overlapImageSource,
  isOverlapImageVisible,
  themeColor,
}) {
  return (
    <CardStyled
      className="produit"
      onClick={onClick}
      $isHoverable={$isHoverable}
      $isSelected={$isSelected}
      $themeColor={themeColor}
    >
      <div className="card">
        {hasDeleteButton && (
          <button
            className="delete-button"
            aria-label="delete-button"
            onClick={onDelete}
          >
            <TiDelete className="icon" />
          </button>
        )}

        <div className="image">
          {isOverlapImageVisible && (
            <div className="overlap">
              <div className="transparent-layer"></div>
              <img
                src={overlapImageSource}
                alt="overlap-image"
                className="overlap-image"
              />
            </div>
          )}
          <img src={imageSource} alt={title} />
        </div>

        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            <div className="right-description">
              <Button
                className="primary-button"
                label={"Ajouter"}
                onClick={onAdd}
                disabled={isOverlapImageVisible}
                themeColor={themeColor}
              />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  //Applique les styles de hoverableStyle seulement si $isHoverable est activé (true).
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}

  width: 240px;
  height: 330px;

  .card {
    position: relative;
    background: ${theme.colors.white};
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};

    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${({ $themeColor }) => $themeColor};
      z-index: 2;
      padding: 0;
      border: none;
      background: none;
      animation: fadeInFromRight 0.5s ease-out forwards;
      @keyframes fadeInFromRight {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .icon {
        width: 100%;
        height: 100%;
      }

      &:hover {
        color: ${theme.colors.incognito};
      }

      &:active {
        color: ${theme.colors.primary};
      }
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .overlap {
        .overlap-image {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          border: ${theme.borderRadius.extraRound};
          animation: fadeInFromTop 0.5s ease-out forwards;
          @keyframes fadeInFromTop {
            0% {
              position: absolute;
              z-index: -1;
              opacity: 0;
              transform: translateY(-40%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        .transparent-layer {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 70%;
          background: snow;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
        }
      }
    }

    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${({ $themeColor }) => $themeColor};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            font-size: ${theme.fonts.size.XS};
            padding: 12px;
          }
        }
      }
    }

    ${({ $isHoverable, $isSelected }) =>
      $isHoverable && $isSelected && selectedStyle}
  }
`;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    box-shadow: ${({ $themeColor }) => `0 0 10px 3px ${$themeColor}`};
    cursor: pointer;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

const selectedStyle = css`
  background: ${({ $themeColor }) => $themeColor};

  .primary-button {
    color: ${({ $themeColor }) => $themeColor};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 20ms ease-out;

    &:hover {
      color: ${theme.colors.white};
      background-color: ${({ $themeColor }) => $themeColor};
      border: 1px solid ${theme.colors.white};
      transition: all 20ms ease-out;
    }

    &:active {
      background-color: ${theme.colors.white};
      color: ${({ themeColor }) => themeColor};
    }

    &:disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid ${theme.colors.white};
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};

      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }

      &:active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    &:active {
      color: ${theme.colors.white};
    }
  }
  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`;
