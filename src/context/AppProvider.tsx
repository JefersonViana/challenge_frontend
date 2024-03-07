'use client';
import { requestLogin, requestRegister, requestDeletePhones, requestAllPhones } from '@/api/requests';
import React, { ReactNode, createContext, useState, useMemo, useContext, useEffect } from 'react';

export const AppContext = createContext<any>({} as any);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [listPhones, setListPhones] = useState([]);

  const fetchLogin = async (action: string): Promise<boolean> => {
    const response = action === 'login' ? (
      await requestLogin(email, password)
    ) : (
      await requestRegister(email, password, userName)
    );
    
    if (response) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('phones', JSON.stringify(response.data));
      setListPhones(response.data);
      setEmail('');
      setPassword('');
      return true;
    }
    return false;
  };

  const fetchDeletePhones = async (id: number): Promise<boolean> => {
    const token = localStorage.getItem('token');
    const response = await requestDeletePhones(id, token);
    if (response) {
      setListPhones(response.data);
      localStorage.setItem('phones', JSON.stringify(response.data));
      return true;
    }
    return false;
  };

  useEffect(() => {
    console.log('AppProvider mounted');
  }, []);

  const value = useMemo(() => ({
    email,
    setEmail,
    userName,
    setUserName,
    password,
    setPassword,
    fetchLogin,
    setListPhones,
    listPhones,
    fetchDeletePhones,
  }), [email, userName, password, listPhones]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const AppStateProvider = () => useContext(AppContext);