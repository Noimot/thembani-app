import React, { useState, useMemo } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [profileCompleted, setProfileCompleted] = useState(false)



    const value = useMemo(
        () => ({
           setProfileCompleted,
           profileCompleted,
        }),
        [profileCompleted]
      )

    return (<AppContext.Provider value={value}>{children}</AppContext.Provider>)

}