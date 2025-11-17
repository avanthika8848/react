import { Children, createContext, useEffect, useState } from "react";

export const UserApiContext =createContext();

export const UserApiProvider = ({ children}) => {
    const [user,setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("");
                const data = await res.json();
                setUsers(data);
                
            } catch (error) {
                console.error("Error feching datas", error);
                
            }  finally{
                setLoading(false);
            }
            
        }

        fetchUser();
    }, []);

    return (
        <UserApiContext.Provider value={{users, loading}}>
            {children}
             
        </UserApiContext.Provider>
    )
}