import React , { useState , createContext }  from "react";
import * as firebase from "firebase/app";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setisLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setisLoading(false);
            })
            .catch((e) => {
                setError(e);
                setisLoading(false);
            });


    return (
        <AuthenticationContext.Provider value={{ user, isLoading , error ,  onLogin }}>
            {children}
        </AuthenticationContext.Provider>
    );
}
}