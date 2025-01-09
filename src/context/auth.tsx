import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

interface UserContext {
    logged: boolean,
    user: any,
    setUser: any
}
export const AuthContext = createContext<UserContext>({
    logged: false,
    user: undefined,
    setUser: undefined
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
    const [user, setUser] = useState();
    useEffect(() => {
        const fetchUser = async () => {
            const user = await axios.get('/@me')

            setUser(user?.data);
            return user?.data;
        }  
        if (Cookies.get('user_discord'))  {
            fetchUser()
        }
        
    }, [])

    return (
        <AuthContext.Provider value={{ logged: !!user, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}