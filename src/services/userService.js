import {
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

import { db } from "../firebase/config";

export const checkUserExists = async (mobile) => {

  const ref = doc(db, "users", mobile);

  const snap = await getDoc(ref);

  return snap.exists();
};

export const saveUser = async (userData) => {

  const ref = doc(
    db,
    "users",
    userData.mobile
  );

  await setDoc(ref, userData);
};