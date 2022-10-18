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
    {
        title: APP_ROUTES_CONFIG.lab1.title,
        path: APP_ROUTES_CONFIG.lab1.path
    },
    {
        title: APP_ROUTES_CONFIG.lab2.title,
        path: APP_ROUTES_CONFIG.lab2.path
    },
    {
        title: APP_ROUTES_CONFIG.lab3.title,
        path: APP_ROUTES_CONFIG.lab3.path
    },
    {
        title: APP_ROUTES_CONFIG.lab4.title,
        path: APP_ROUTES_CONFIG.lab4.path
    },
    {
        title: APP_ROUTES_CONFIG.lab5.title,
        path: APP_ROUTES_CONFIG.lab5.path
    },
]

export { navigation }