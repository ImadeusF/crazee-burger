import { useState } from "react";

function LoginPage() {
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
    <div>
      <h1>Bienvenue chez nous!</h1>
      <br />
      <h2>Connectez vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputvalue}
          placeholder="Entrez votre prénom"
          required
          onChange={handleChange}
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}

export default LoginPage;
