import { createContext, useState } from "react";
import axios from "../config/axios";
import { addAccessToken } from '../utils/local-storage';


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);


  const login = async credential => {
    console.log(credential);
    const res = await axios.post('/auth/login', credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };



  const register = async registerInputObject => {
    const res = await axios.post('/auth/register', registerInputObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };



  return (
    <AuthContext.Provider value={{ login, authUser, register}}>
      {children}
    </AuthContext.Provider>
  );
}