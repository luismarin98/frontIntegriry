import { createContext, ReactNode } from "react";
import { useClient } from "./hooks/useClient";
import { ClienteType } from "../../Interfaces/ClienteType";

export interface ILoginContext {
    client: ClienteType | undefined
    get: (username: string, password: string) => Promise<void>
    loading: boolean
}

const LoginContext = createContext({});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const { client, get, loading } = useClient();
    
    const storage: ILoginContext = { client, get, loading }

    return <LoginContext.Provider value={storage}>{children}</LoginContext.Provider>
}

export default LoginContext;