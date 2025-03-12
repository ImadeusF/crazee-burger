import styled from "styled-components";
import { theme } from "../../../../../../themes";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "../getTabsConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import { devices } from "../../../../../../enums/devices";

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext);

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected?.index && tabSelected?.Content}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: sticky;
  top: 10px;
  height: 240px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
  box-sizing: border-box;

  @media ${devices.md} {
    height: 60dvh;
  }
`;
