import React , { useState , createContext } from "react";
import firebase from 'firebase/app';

export const AuthenticationContext = createContext();
import {loginRequest} from './authentication.service';

export const AuthenticationContextProvider = ({ children }) => {
       const [isLoading , setIsLoading] = useState(false);
       const [user , setUser] = useState(null);
       const [error , setError] = useState(null);

        const onLogin = (email , password) => {
            setIsLoading(true);
            loginRequest(email , password).then((u) => {
                setUser(u)
                setIsLoading(false)
            }).catch((e) => {
                setIsLoading(false)
                setError(e)
            })
        }


       return ((
          <AuthenticationContext.Provider
           value={{
            user,
            isLoading,
            error,
            onLogin,
           }}
          >
            {children}
          </AuthenticationContext.Provider>
       ))
}