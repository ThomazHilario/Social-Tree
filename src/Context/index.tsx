import {useState, useContext, createContext, ReactNode} from 'react'

interface ComponentChildren{
    children:ReactNode
}

interface StateDarkMode{
    darkmode:boolean | null,
    setDarkmode:React.Dispatch<React.SetStateAction<boolean | null>>
}

// contexto
export const Context = createContext<StateDarkMode | undefined>(undefined)

export function ContextDarkMode({children}:ComponentChildren){
    const [darkmode, setDarkmode] = useState<boolean | null>(false)

    return(
        <Context.Provider value={{darkmode, setDarkmode}}>
            {children}
        </Context.Provider>
    )
}

export function UseDarkContext():StateDarkMode{

    const myContext = useContext(Context)

    if(!myContext){
        throw'error'
    }

    return myContext
}
