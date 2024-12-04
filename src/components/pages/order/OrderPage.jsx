import React from "react";
import { Link, useParams } from "react-router";

export default function OrderPage() {
  const {username} = useParams(); //paramètres de l'url
  // useParams renvoi un objet, on peut déstructurer pour récupérer la valeur de la clé inputValue

  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
