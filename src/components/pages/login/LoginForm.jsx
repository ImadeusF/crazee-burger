import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous!</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={inputValue}
        placeholder="Entrez votre prénom"
        required
        onChange={handleChange}
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}
