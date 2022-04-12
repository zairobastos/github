import { createContext } from "react";

interface Dados {
    username: string;
}

const initialValue = {
    username: "zairobastos"
}

export const Context = createContext<Dados>(initialValue);

export const ContextProvider: React.FC = ({children})=>{
    return(
        <Context.Provider value={initialValue}>
            {children}
        </Context.Provider>
    );
}