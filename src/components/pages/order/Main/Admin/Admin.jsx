import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { motion } from "motion/react";
import { devices } from "../../../../../enums/devices";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);
  return (
    <AdminStyled>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AdminTabs />
        {!isCollapsed && <AdminPanel />}
      </motion.div>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media ${devices.md} {
    position: absolute;
  }
`;
