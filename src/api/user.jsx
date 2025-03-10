import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

export const createUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const newUserToCreate = {
    username: userId,
    menu: fakeMenu.MEDIUM, // quand on crée un utilisateur, c'est toujours le même menu qui est associé
    themeColor: "#ffa01b",
  };
  await setDoc(docRef, newUserToCreate);
  return newUserToCreate;
};

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
  
  if (!existingUser) {
    return await createUser(userId);  
  }
  return existingUser;
}
