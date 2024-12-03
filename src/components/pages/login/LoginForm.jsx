import React, { useState } from "react";

export default function LoginForm() {
  const [inputvalue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(inputvalue);
    alert(`Bonjour ${inputvalue}!`);
    setInputValue("");
  };
  
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous!</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={inputvalue}
        placeholder="Entrez votre prénom"
        required
        onChange={handleChange}
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}
