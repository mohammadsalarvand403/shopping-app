import { createContext, useState ,useContext, useEffect} from "react";

const AuthProviderContext=createContext();
const AuthProviderDispacher=createContext();



const AuthProvider = ({children}) => {
    const [state ,setState]=useState()

    useEffect(()=>{
        const userData =JSON.parse(localStorage.getItem('authState')) 
        setState(userData)
    },[])
    useEffect(()=>{
        const data =JSON.stringify(state)
        localStorage.setItem("authState",data)
        
    },[state])
    return (  
        <AuthProviderContext.Provider value={state}>
            <AuthProviderDispacher.Provider value={setState}>
            {children}
            </AuthProviderDispacher.Provider>
        </AuthProviderContext.Provider>
    );
}
 
export default AuthProvider;

export const useAuth=()=>useContext(AuthProviderContext);
export const useAuthActions=()=>useContext(AuthProviderDispacher);
