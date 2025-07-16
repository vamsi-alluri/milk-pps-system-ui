// src/utils/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    const cookie = Cookies.get('userInfo');
    console.log(cookie);
    return cookie ? JSON.parse(cookie) : null;
  });

  const isLoggedIn = !!userInfo;

  const login = () => {
    const userData = Cookies.get('userInfo');
    setUserInfo(userData ? JSON.parse(userData) : null);
  };

  const logout = () => {
    Cookies.remove('userInfo');
    setUserInfo(null);
  };

  const username = userInfo?.username ?? '';

  useEffect(() => {
    const interval = setInterval(() => {
      const cookie = Cookies.get('userInfo');
      if (!cookie && userInfo) {
        setUserInfo(null); // session expired
      }
    }, 60000); // Check every 1 minute
    return () => clearInterval(interval);
  }, [userInfo]);

  return (
    <AuthContext.Provider value={{ userInfo, isLoggedIn, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
