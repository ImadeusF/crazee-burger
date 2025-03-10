import { getMenu } from "../../../../api/product";
import { getThemeColor } from "../../../../api/theme";
import { getLocalStorage } from "../../../../utils/window";

const initialiseMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const initialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage (username); //localStorage est synchrone, pas besoin de await
  if (basketReceived) setBasket(basketReceived);
};

const initialiseThemeColor = async (username, setThemeColor, defaultColor) => {
  const ThemeColorFirebase = await getThemeColor(username);
  if (ThemeColorFirebase) {
    setThemeColor(ThemeColorFirebase); 
  } else {
    setThemeColor(defaultColor); 
  }
};

export const initialiseUserSession = async (username, setMenu, setBasket, setThemeColor, defaultColor) => {
  await initialiseMenu(username, setMenu);
  initialiseBasket(username, setBasket);
  initialiseThemeColor(username, setThemeColor, defaultColor);
};
