import { devices } from "../../../enums/devices";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"} />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.7) url("/images/burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .logo-login-page {
    transform: scale(2.5);
    
    @media ${devices.md} {
      transform: scale(2);
    }
    @media ${devices.sm} {
      transform: scale(1.75);
    }
    @media ${devices.xsm} {
      transform: scale(1.25);
    }
  }
`;
