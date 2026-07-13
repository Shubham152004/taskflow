
import { createContext,useContext,useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children})=> {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [token,setToken] = useState(localStorage.getItem("token") || null);

    function login(userData,jwtToken) {
        setUser(userData);
        setToken(jwtToken);

        localStorage.setItem("user",JSON.stringify(userData));
        localStorage.setItem("token",jwtToken);
    }

    function logout(){
        setUser(null);
        setToken(null);

        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }


    return (
        <AuthContext.Provider value={{user,token,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);