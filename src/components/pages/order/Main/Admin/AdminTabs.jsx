import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../themes";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  return (
    <AdminTabsStyled>
      <Tab
        Icon={!isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        className={!isCollapsed ? "null" : "is-active" }
        onClick={() => setIsCollapsed(!isCollapsed)}/>
      />
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
`;
