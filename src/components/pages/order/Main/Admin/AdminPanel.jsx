import styled from "styled-components";
import { theme } from "../../../../../themes";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
    const {
      isAddSelected,
      isEditSelected,
    } = useContext(OrderContext);

  return <AdminPanelStyled>
    {isAddSelected && "Ajouter un produit"}
    {isEditSelected && "Modifier un produit"}
  </AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;