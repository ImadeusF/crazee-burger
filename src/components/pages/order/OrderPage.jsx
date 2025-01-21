import { theme } from "../../../themes";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from "../../../utils/array";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected]= useState("edit");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const handleAdd = (newProduct) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy]
    setMenu(menuUpdated);
  }

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete);
    setMenu(menuUpdated);
  }
  
  const handleEdit = (productBeingEdited) => {
    const menuCopy = deepClone(menu);
    const indexOfProductToEdit = menu.findIndex((menuProduct) => menuProduct.id === productBeingEdited.id);  
    menuCopy[indexOfProductToEdit] = productBeingEdited;
    setMenu(menuCopy);
  }

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  }



  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,  
    setProductSelected,
    handleEdit
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
