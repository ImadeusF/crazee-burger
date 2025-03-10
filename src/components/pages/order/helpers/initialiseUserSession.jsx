import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";

const initialiseMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const initialiseBasket = (username, setBasket) => {
  const userData = getLocalStorage(username);
  const basketReceived = userData?.basket || []; //localStorage est synchrone, pas besoin de await
  if (basketReceived) setBasket(basketReceived);
};

const initialiseThemeColor = (username, setThemeColor, defaultColor) => {
  const userData = getLocalStorage(username) || {};
  const themeColor = userData.themeColor || defaultColor; 
  setThemeColor(themeColor);
};

export const initialiseUserSession = async (username, setMenu, setBasket, setThemeColor, defaultColor) => {
  await initialiseMenu(username, setMenu);
  initialiseBasket(username, setBasket);
  initialiseThemeColor(username, setThemeColor, defaultColor);
};
