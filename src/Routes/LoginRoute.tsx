import { LOGIN_FEATURE } from "../Features/Login"
import { LoginProvider } from "../Features/Login/provider"

export const LOGIN_ROUTE = () => {
    return <LoginProvider><LOGIN_FEATURE /></LoginProvider>
}