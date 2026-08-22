import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/auth.service";

export const authContext = createContext();

const AuthProvider = ({children}) => {

    const [authenticated, setAuthenticated] = useState(false);
    
    
    useEffect(() => {
      checkAuth();
    }, [])
   
    async function checkAuth() {
        
        try {
           await getCurrentUser();
           setAuthenticated(true);
         } catch (error) {
           console.log(error);
         }
    }
  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider
