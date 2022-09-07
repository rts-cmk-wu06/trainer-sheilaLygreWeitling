/* import { createContext, useMemo, useState } from 'react'
const StateContext = createContext()

const StateProvider = ({ children }) => {

    const [email, setEmail] = useState('test@hotmail.com')

    const value = useMemo(
        () =>
            ({ email, setEmail }),
        [email]
    )
    return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

export { StateContext, StateProvider }; */