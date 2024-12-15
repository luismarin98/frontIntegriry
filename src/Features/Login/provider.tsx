import { createContext, ReactNode } from "react";
import { useClient } from "./hooks/useClient";
import { ClienteType } from "../../Interfaces/ClienteType";
import { AuthDTO } from "../../Interfaces/Auth";

export interface ILoginContext {
    post: (auth: AuthDTO) => Promise<void>
    loading: boolean
}

const LoginContext = createContext({});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const { post, loading } = useClient();

    const storage: ILoginContext = { post, loading }

    return <LoginContext.Provider value={storage}>{children}</LoginContext.Provider>
}

export default LoginContext;