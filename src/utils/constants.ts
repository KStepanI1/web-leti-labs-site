const AUTHOR_FULL_NAME = 'Карпекин Степан Игоревич'

const BASE_URL = `http://localhost:3000`

const APP_PATHS = {
    home:  '/',
    lab1: '/lab-1',
    lab2: '/lab-2',
    lab3: '/lab-3',
    lab4: '/lab-4',
    lab5: '/lab-5',
    resultViewer: '/result-viewer',
    aboutAuthor: '/aboutus'
}

const APP_PAGE_TITLES = {
    home: 'Главная',
    lab1: 'Лаболаторная работа 1',
    lab2: 'Лаболаторная работа 2',
    lab3: 'Лаболаторная работа 3',
    lab4: 'Лаболаторная работа 4',
    lab5: 'Лаболаторная работа 5',
    resultViewer: 'Результат',
    aboutAuthor: 'Об авторе'
}

const APP_ROUTES_CONFIG = {
    home: {
        path: APP_PATHS.home,
        title: APP_PAGE_TITLES.home
    },
    lab1: {
        path: APP_PATHS.lab1,
        title: APP_PAGE_TITLES.lab1
    },
    lab2: {
        path: APP_PATHS.lab2,
        title: APP_PAGE_TITLES.lab2
    },
    lab3: {
        path: APP_PATHS.lab3,
        title: APP_PAGE_TITLES.lab3
    },
    lab4: {
        path: APP_PATHS.lab4,
        title: APP_PAGE_TITLES.lab4
    },
    lab5: {
        path: APP_PATHS.lab5,
        title: APP_PAGE_TITLES.lab5
    },
    resultViewer: {
        path: APP_PATHS.resultViewer,
        title: APP_PAGE_TITLES.resultViewer
    },
    aboutAuthor: {
        path: APP_PATHS.aboutAuthor,
        title: APP_PAGE_TITLES.aboutAuthor
    }
}

export { AUTHOR_FULL_NAME, APP_ROUTES_CONFIG, BASE_URL }