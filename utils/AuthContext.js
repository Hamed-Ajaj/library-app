"use client"
import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../app/Config";
import { ID} from 'appwrite';
import { useRouter } from "next/navigation";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    useEffect(() => {
        //setLoading(false)
        checkUserStatus()
    }, [])
    // ! user functions
    const loginUser = async (userInfo) =>{
        setLoading(true)
        try {
            let res = await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            setUser(res)
            router.push('/')
        } catch (error) {
            console.error(error)
        }
        setLoading(false)   
    }

    const logoutUser = async () =>{
        setLoading(true)

        try {
            await account.deleteSession('current');
            setUser(null)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
        return(
            <p>Logged out</p>
        )
    }

    const registerUser = async (userInfo) =>{
        let res = await account.create(ID.unique(),userInfo.email,userInfo.password,userInfo.name)

        await account.createEmailPasswordSession(userInfo.email, userInfo.password)
        let accountDetails = await account.get();
        setUser(accountDetails)
        console.log(accountDetails)
        router.push('/')
    }

    const forgotPassword = async () =>{
        // ! implement forgot password
        
    }  

    const checkUserStatus = async () => {
        try{
            let accountDetails = await account.get();
            setUser(accountDetails)
        }catch(error){
            
        }
        setLoading(false)
    }

    // ! admin functions
    const addBook = async (book) => {
        
    }

    const deleteBook = async (bookId) => {

    }

    const updateBook = async (book) => {

    }




    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        forgotPassword,
        addBook,
        deleteBook,
        updateBook
    }
    
    


    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )

}

export const useAuth = ()=> {return useContext(AuthContext)}

export default AuthContext;
