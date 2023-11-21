import { createContext, useState } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken, removeAccessToken } from '../utils/local-storage';
import { useEffect } from "react";


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      
    } 
  }, []);


  const login = async credential => {
    try {
      console.log(credential);
    const res = await axios.post('/auth/login', credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
    } catch (error) {
      console.log(
        error
      )
    }
  };

  const logout = () => {
      removeAccessToken();
      setAuthUser(null);
  };



  const register = async registerInputObject => {
    const res = await axios.post('/auth/register', registerInputObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };



  return (
    <AuthContext.Provider value={{ login, logout, authUser, register, isLoading, setIsLoading}}>
      {children}
    </AuthContext.Provider>
  );
}