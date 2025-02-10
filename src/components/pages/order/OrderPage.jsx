import { theme } from "../../../themes";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useEffect, useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectById } from "../../../utils/array";
import { useParams } from "react-router";
import { getMenu } from "../../../api/product";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu();
  const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket();
  const { username } = useParams(); //paramètres de l'url
  // useParams renvoi un objet, on peut déstructurer pour récupérer la valeur de la clé inputValue

  const handleProductSelected = async (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menu);
    setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const initialiseMenu = async () => {
    const menuReceived = await getMenu(username);
    setMenu(menuReceived);
  };

  useEffect(() => {
    initialiseMenu();
  }, []);

  const orderContextValue = {
    username,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyle>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyle>
    </OrderContext.Provider>
  );
}

const OrderPageStyle = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
