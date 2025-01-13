import styled from "styled-components";
import { theme } from "../../../../../themes";

export default function AdminPanel() {
  return <AdminPanelStyled></AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;