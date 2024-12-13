import { DASHBOARD_FEATURE } from "../Features/Dashboard"
import { DashboardProvider } from "../Features/Dashboard/provider"

export const DASHBOARD_ROUTE = () => {
    return <DashboardProvider><DASHBOARD_FEATURE /></DashboardProvider>
}