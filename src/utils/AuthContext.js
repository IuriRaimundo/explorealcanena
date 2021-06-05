import React, { useState, useEffect, createContext, useContext } from 'react';
// Firebase
import 'firebase/auth';
import { app } from './firebase';

const auth = app.auth();
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signup = (email, password, name) => {
    return auth.createUserWithEmailAndPassword(email, password).then((user) => {
      user.user.updateProfile({
        displayName: name,
      });
      user.user.sendEmailVerification();
    });
  };

  const logout = () => {
    return auth.signOut();
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password).then((user) => {
      setCurrentUser(user);
    });
  };

  const updateName = (name) => {
    return currentUser.updateProfile({
      displayName: name,
    });
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const authOperations = {
    login,
    signup,
    logout,
    updatePassword,
    updateName,
    resetPassword,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  });

  const value = {
    currentUser,
    open,
    setOpen,
    authOperations,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
