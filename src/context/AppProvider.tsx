'use client';
import React, { ReactNode, createContext, useState, useMemo, useContext, useEffect } from 'react';

export const AppContext = createContext<any>({} as any);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('AppProvider mounted');
  }, []);

  const value = useMemo(() => (
    { email, setEmail, userName, setUserName, password, setPassword }
  ), [email, userName, password]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const AppStateProvider = () => useContext(AppContext);