import { APP_ROUTES_CONFIG } from "./constants"

export interface Navigation {
    title: string
    path: string
    isEnd?: boolean
}


const navigation: Navigation[] = [
    {
        title: APP_ROUTES_CONFIG.home.title,
        path: APP_ROUTES_CONFIG.home.path,
        isEnd: true
    },
]

export { navigation }