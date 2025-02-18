import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../themes";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsSelected } from "./helper";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../../enums/product";
import { isEmpty } from "../../../../../utils/array";
import Loader from "./Loader";
import { motion, AnimatePresence } from "motion/react";

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
        {menu.map(({ id, title, imageSource, price }) => {
          return (
            <motion.div
              key={id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                key={id}
                title={title}
                imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                leftDescription={formatPrice(price)}
                hasDeleteButton={isModeAdmin}
                onDelete={(e) => handleCardDelete(e, id)}
                onClick={isModeAdmin ? () => handleProductSelected(id) : null}
                $isHoverable={isModeAdmin}
                $isSelected={checkIfProductIsSelected(id, productSelected.id)}
                onAdd={(e) => handleAddButton(e, id)}
              />
            </motion.div>
          );
        })}
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
`;
