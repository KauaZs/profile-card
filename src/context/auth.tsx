import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

interface UserContext {
    logged: any,
    user: any,
    setUser: any,
    loggedProcess: boolean
}
export const AuthContext = createContext<UserContext>({
    logged: false,
    user: undefined,
    setUser: undefined,
    loggedProcess: false
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
    const [user, setUser] = useState();
    const [process, setLoggedProcess] = useState<boolean>(false)
    useEffect(() => {
        const fetchUser = async () => {
            const user = await axios.get('/api/@me',{
                withCredentials: true
        })
            
            setTimeout(() => {
                setUser(user?.data);
                setLoggedProcess(true)
                return user?.data;
            }, 2000)
            
        }  
        if (Cookies.get('user_discord'))  {
            fetchUser()
           
        } else {
            setLoggedProcess(true)
        }
        
    }, [user, process])

    return (
        <AuthContext.Provider value={{ logged: !!user, user, setUser, loggedProcess: process }}>
            {children}
        </AuthContext.Provider>
    )
}