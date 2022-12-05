import React, { useState, useMemo } from 'react'
import { useEffect } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [profileCompleted, setProfileCompleted] = useState(false)

    useEffect(() => {
      let Value = false

     const profile = JSON.parse(localStorage.getItem("userProfile"))
     if (profile.profile !== null ) {
        setProfileCompleted(true)
     } else {
        setProfileCompleted(false)
     }
    
      return () => {
        Value = true
      }
    }, [])
    



    const value = useMemo(
        () => ({
           setProfileCompleted,
           profileCompleted,
        }),
        [profileCompleted]
      )

    return (<AppContext.Provider value={value}>{children}</AppContext.Provider>)

}