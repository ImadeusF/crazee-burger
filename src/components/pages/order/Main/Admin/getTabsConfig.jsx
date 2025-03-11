import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm/AddForm";
import EditForm from "./AdminPanel/EditForm/EditForm";
import HintMessage from "./AdminPanel/EditForm/HintMessage";
import { VscSymbolColor } from "react-icons/vsc";
import ThemeColors from "./AdminPanel/ThemeColors/ThemeColors";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
    {
      index: "add",
      label: "Ajouter",
      Icon: <AiOutlinePlus />,
      Content: <AddForm />,
    },
    {
      index: "edit",
      label: "Modifier",
      Icon: <MdModeEditOutline />,
      Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
    },
    {
      index: "theme",
      label: "Couleurs",
      Icon: <VscSymbolColor />,
      Content: <ThemeColors />,
    },
  ];

  export const getTabSelected = (tabs, currentTabSelected) => 
     tabs.find((tab) => tab.index === currentTabSelected) 