import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem("auth");
        if(storedAuth === "true") {
            setIsAuthenticated(true);
        }
    },[]);

    const login = (email, password) => {
        if(email === "ankita@mandal.com" && password === "123456"){
            setIsAuthenticated(true);
            localStorage.setItem("auth","true");
            return true;
        }

        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("auth");
    };

    return (
        <AuthContext.Provider value = {{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);