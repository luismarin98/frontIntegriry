import { DashboardProvider } from "../Features/Dashboard/provider"
import { INICIO_VIEW } from "../Features/Dashboard/views/InicioView"

export const HOME_ROUTE = () => {
    return <DashboardProvider><INICIO_VIEW /></DashboardProvider>
}