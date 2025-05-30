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
import { initialiseUserSession } from "./helpers/initialiseUserSession";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();
  const { username } = useParams(); //paramètres de l'url
  // useParams renvoi un objet, on peut déstructurer pour récupérer la valeur de la clé inputValue
  const [isBasketSmallDevicesActive, setIsBasketSmallDevicesActive] =
  useState(false);
  const [themeColor, setThemeColor] = useState(theme.colors.primary); 


  const handleProductSelected = async (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menu);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket, setThemeColor, theme.colors.primary);
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
    isBasketSmallDevicesActive,
    setIsBasketSmallDevicesActive,
    themeColor,
    setThemeColor,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyle $themeColor={themeColor}>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyle>
    </OrderContext.Provider>
  );
}

const OrderPageStyle = styled.div`
  background: ${({ $themeColor }) => $themeColor};
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95dvh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
