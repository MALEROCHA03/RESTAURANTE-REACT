import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import styles from "../Header/Header.module.css";


export const Perfil = () => {
    const { user, isAuthenticated, isLoading} = useAuth0();
    if (isLoading){
        return <div>Loading...</div>
    }
    return (

        isAuthenticated && (
            
            <span className={styles.ingresar2}> Bienvenido:{user.name} </span> 
        
        )
        
    );
};
