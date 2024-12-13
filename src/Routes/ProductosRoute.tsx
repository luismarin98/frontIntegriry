import { DashboardProvider } from "../Features/Dashboard/provider"
import { PRODUCTOS_VIEW } from "../Features/Dashboard/views/ProductosView"

export const PRODUCTOS_ROUTE = () => {
    return <DashboardProvider><PRODUCTOS_VIEW /></DashboardProvider>
}