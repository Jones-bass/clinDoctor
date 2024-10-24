import React, { useCallback, useContext, createContext, useState } from 'react'
import { api } from '../services/api'

interface User {
  id: string
  name: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
}

export interface IAuthContextData {
  children: React.ReactNode
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: IAuthContextData) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ClinDoctor:token');
    const userString = localStorage.getItem('@ClinDoctor:user');

    if (token && userString) {
      try {
        const user = JSON.parse(userString);
        api.defaults.headers.authorization = `Bearer ${token}`;
        return { token, user };
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
        return {} as AuthState;
      }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('sessions', { email, password });

    const { token, patientUser } = response.data;

    localStorage.setItem('@ClinDoctor:token', token);
    localStorage.setItem('@ClinDoctor:user', JSON.stringify(patientUser));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user: patientUser });
  }, []);


  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within an AuthProvider')

  return context
}