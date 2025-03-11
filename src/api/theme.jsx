import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const saveThemeColor = async (username, color) => {
  const userRef = doc(db, "users", username);
  await updateDoc(userRef, { themeColor: color });
  console.log(`Thème mis à jour : ${color}`);
};

export const getThemeColor = async (username) => {
  try {
    const userRef = doc(db, "users", username);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data().themeColor || null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du thème :", error);
  }
  return null;
};
