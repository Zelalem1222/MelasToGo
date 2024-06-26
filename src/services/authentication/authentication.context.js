import React , { useState , createContext  ,useRef } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {loginRequest} from './authentication.service';


export const AuthenticationContext = createContext();


export const AuthenticationContextProvider = ({ children }) => {
       const [isLoading , setIsLoading] = useState(false);
       const [user , setUser] = useState(null);
       const [error , setError] = useState(null);
       const auth = useRef(getAuth()).current;

        const onLogin = (email , password) => {
            setIsLoading(true);
            loginRequest(auth, email , password)
              .then((u) => {
                setUser(u)
                setIsLoading(false)
              })
              .catch((e) => {
                setIsLoading(false)
                setError(e.toString());
            })
        }

        const onRegister = (email, password , repeatedPassword) => {
          if(password != repeatedPassword){
            setError("Error: Password do not match")
            return
          }
                 createUserWithEmailAndPassword(auth, email , password)
                 .then((u) => {
                  setUser(u)
                  setIsLoading(false)
                  })
                 .catch((e) => {
                  setIsLoading(false)
                  setError(e.toString());
                 });
        }


       return ((
          <AuthenticationContext.Provider
           value={{
            isAuthenticated: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister 
           }}
          >
            {children}
          </AuthenticationContext.Provider>
       ))
}