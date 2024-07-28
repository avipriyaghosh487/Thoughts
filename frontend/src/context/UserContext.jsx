import {createContext, useEffect, useState } from "react";
import axios from 'axios';
import {url} from '../url'

export const UserContext = createContext({});

export function UserContextProvider ({children}) {
    const [user,setUser] = useState(null)

    const getUser = async () =>{
        try{
            const res = await axios.get(url +'/api/auth/refetch',{withCredentials:true})
            setUser(res.data)
        }catch(err){
            console.log(err)
        }
    } 

    useEffect(() => {
        getUser()
    }, [])


    return (<UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>)
}
