import styled from "styled-components";
import { theme } from "../../../../../../themes";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "../getTabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
     {currentTabSelected === tabSelected?.index && tabSelected?.Content}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
