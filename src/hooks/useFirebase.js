import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading]= useState(true);

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  //   google login
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=>setIsLoading(false));
  };

  //  logout
  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=> setIsLoading(false));
  };

  //   user registration
  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message)
      });
  };

  //   user email password login
  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
          setUser(result.user)
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  //   on auth stage change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    user,
    error,
    signInWithGoogle,
    handleLogout,
    handleUserLogin,
    handleUserRegister
  };
};

export default useFirebase;
