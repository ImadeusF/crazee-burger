import { createContext } from "react";

export default createContext ({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    isAddSelected: false,
    setIsAddSelected: () => {},

    isEditSelected: false,
    setIsEditSelected: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    menu: [],
    setMenu:() => {},
    resetMenu:() => {},
    handleAdd: () => {},
    handleDelete: () => {},

    newProduct:[],
    setNewProduct:() => {},
});