import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../themes";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);

    if (tabSelected === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    }

    else if (tabSelected === "edit") {
      setIsAddSelected(false);
      setIsEditSelected(true);
    }
  };

const tabsConfig = [ {
  label: "",
  Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
  onClick: () => setIsCollapsed(!isCollapsed),
  className: isCollapsed ? "is-active" : "null",
},
  {
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    onClick: () => selectTab("add"),
    className: isAddSelected ? "is-active" : "null",
  },
  {
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    onClick: () => selectTab("edit"),
    className: isEditSelected ? "is-active" : "null",
}]

  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={tab.onClick}
          className={tab.className}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0px 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
