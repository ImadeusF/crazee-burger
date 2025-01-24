import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
   const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  
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
    
    return {
      menu,
      setMenu,
      handleAdd,
      handleDelete,
      handleEdit,
      resetMenu
    };
}

