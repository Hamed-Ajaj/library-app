"use client"

import { createContext, useState, useEffect, useContext } from "react";
import { getCollection } from "./db";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    
    const getProfile = getCollection(process.env.NEXT_PUBLIC_PROFILE_COLLECTION_ID);

    useEffect(() => {
        setProfile(getProfile);
    },[])


    
    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
        {children}
        </ProfileContext.Provider>
    );
}

export const useProfile = () => useContext(ProfileContext);