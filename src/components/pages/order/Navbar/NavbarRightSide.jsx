import styled from "styled-components";
import Profile from "./Profile";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { FaUserSecret } from "react-icons/fa";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightSide({ username }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

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
      })
    }
    setIsModeAdmin(!isModeAdmin);
  };
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        onToggle={displayToastNotification}
        labelIfChecked="Mode admin activé"
        labelIfUnchecked="Mode admin désactivé"
        // couleurDuBackground={"green"}
        // couleurDuTexte={"white"}
      />
      <ToastAdmin />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
