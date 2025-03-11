import styled from "styled-components";
import Profile from "./Profile";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin";
import OrderContext from "../../../../context/OrderContext";
import { devices } from "../../../../enums/devices";

export default function NavbarRightSide() {
  const { isModeAdmin, setIsModeAdmin, themeColor } = useContext(OrderContext);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };


  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        onToggle={displayToastNotification}
        icon={isModeAdmin}
        labelIfChecked="Admin"
        labelIfUnchecked="User"
        themeColor={themeColor}
      />
      <ToastAdmin />
      <Profile themeColor={themeColor}/>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  @media ${devices.xsm} {
    padding-right: 0px;
  }
`;
