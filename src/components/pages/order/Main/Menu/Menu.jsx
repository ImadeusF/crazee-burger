import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../themes";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsSelected } from "./helper";
import {
  EMPTY_PRODUCT,
  IMAGE_COMING_SOON,
  IMAGE_NO_STOCK,
} from "../../../../../enums/product";
import { isEmpty } from "../../../../../utils/array";
import Loader from "./Loader";
import { motion, AnimatePresence } from "motion/react";
import { convertStringToBoolean } from "../../../../../utils/string";
import Ribbon from "../../../../reusable-ui/Ribbon";
import { devices } from "../../../../../enums/devices";

export default function Menu() {
  const {
    username,
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  const handleCardDelete = (e, idProductToDelete) => {
    e.stopPropagation(); // pour que la card active reste active
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete, username);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (e, idProductToAdd) => {
    e.stopPropagation();
    handleAddToBasket(idProductToAdd, username);
  };

  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }

  return (
    <MenuStyled>
      <AnimatePresence>
        {menu.map(
          ({ id, title, imageSource, price, isAvailable, isPublicised }) => {
            return (
              <motion.div
                key={id}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                classname="card-wrapper"
              >
                <div
                  className={`card-container ${
                    isModeAdmin ? "is-hoverable" : ""
                  }`}
                >
                  {convertStringToBoolean(isPublicised) && (
                    <motion.div
                      key={`ribbon-${id}`}
                      initial={{ x: 0, y: 0, opacity: 0, scale: 1 }}
                      animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      whileHover={isModeAdmin ? { scale: 1.05 } : {}}
                      exit={{ x: -100, y: -100, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="ribbon-container"
                    >
                      <Ribbon />
                    </motion.div>
                  )}

                  <Card
                    key={id}
                    title={title}
                    imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                    leftDescription={formatPrice(price)}
                    hasDeleteButton={isModeAdmin}
                    onDelete={(e) => handleCardDelete(e, id)}
                    onClick={
                      isModeAdmin ? () => handleProductSelected(id) : null
                    }
                    $isHoverable={isModeAdmin}
                    $isSelected={checkIfProductIsSelected(
                      id,
                      productSelected.id
                    )}
                    onAdd={(e) => handleAddButton(e, id)}
                    overlapImageSource={IMAGE_NO_STOCK}
                    isOverlapImageVisible={
                      convertStringToBoolean(isAvailable) === false
                    } //de base isAvailable is a string
                  />
                </div>
              </motion.div>
            );
          }
        )}
      </AnimatePresence>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .card-container {
    position: relative;
    transition: transform 0.3s ease-out;
  }

  .card-container.is-hoverable:hover {
    transform: scale(1.05);
  }

  .ribbon-container {
    position: absolute;
    z-index: 2;
    transition: transform 0.3s ease-out;
  }

  .card-container.is-hoverable:hover .ribbon-container {
    transform: scale(1.1);
  }

  @media ${devices.xl} {
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 20px 150px 40px;
    grid-row-gap: 40px;
  }
  @media ${devices.xsm} {
    grid-template-columns: repeat(1, 1fr);
    padding: 50px 20px 150px 40px;
    grid-row-gap: 40px;
  }
`;
