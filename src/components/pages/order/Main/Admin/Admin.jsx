import styled from "styled-components";
import { theme } from "../../../../../themes";

export default function Admin() {
  return <AdminStyled className="admin">Admin</AdminStyled>;
}

const AdminStyled = styled.div`
      position: absolute;
      height: 250px;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
`;
