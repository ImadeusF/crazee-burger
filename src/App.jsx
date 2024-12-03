import { useState } from "react";
import LoginPage from "./components/pages/LoginPage.jsx";

function App() {
  const [prenom, setPrenom] = useState("");

  const handleSubmit = (e) => {
    if (!e.target.closest("form").checkValidity()) {
      return; // Ne bloquez pas le comportement natif du navigateur
    } else {
      e.preventDefault();
      alert(`Bonjour ${prenom}!`);
      setPrenom("");
    }
  };

  return (
    <div>
      <LoginPage />
      <h1>Bienvenue chez nous!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prenom}
          placeholder="Entrez votre prénom"
          required
          onChange={(e) => setPrenom(e.target.value)}
        />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </div>
  );
}

export default App;
