import { FirstLab } from "../pages/FirstLab"
import { Home } from "../pages/Home"
import { APP_ROUTES_CONFIG } from "./constants"

export interface Route {
    path: string
    title: string
    component: (props: any) => JSX.Element
}

const routes: Route[] = [
    {
        path: APP_ROUTES_CONFIG.home.path,
        title: APP_ROUTES_CONFIG.home.title,
        component: Home
    },
    {
        path: APP_ROUTES_CONFIG.lab1.path,
        title: APP_ROUTES_CONFIG.lab1.title,
        component: FirstLab
    }
]

export { routes }