import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../themes";
import { IoChevronForward } from "react-icons/io5";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous!</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <div className="input-with-icon">
          <BsPersonCircle className="icon"/>
          <input
            type="text"
            value={inputValue}
            placeholder="Entrez votre prénom"
            required
            onChange={handleChange}
          />
        </div>
        <button className="button-with-icon">
          <span>Accéder à votre espace</span>
          <IoChevronForward/>
        </button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }

  h2 {
    color: ${theme.colors.greyLight};
    margin: 20px 10px;
    font-size: ${theme.fonts.P4};
  }

  .input-with-icon {
    background: ${theme.colors.white};
    border-radius: 5px;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    margin: 18px 0;

    .icon {
    color:red;
    font-size: 15px;
    margin-right:8px;
    color: ${theme.colors.greyMedium};
    }

    input {
      border: none;
      font-size: 15px;
      width:100%;
    }

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyLight};
    }
  }

  .button-with-icon {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding:18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: ${theme.fonts.heavy};
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    &:active {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }

    &:hover:not(:disabled) {
      color: ${theme.colors.primary};
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`
