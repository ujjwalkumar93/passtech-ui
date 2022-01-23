import React, { useEffect, useState } from 'react';

export default function Auth(){
    const[auth,setAuth] = useState(false)
    useEffect(()=> {
        let user = localStorage.getItem("email")
        if(user != null || user != undefined){
            setAuth(true)
        }
    })
    return(
        {}
    )
}