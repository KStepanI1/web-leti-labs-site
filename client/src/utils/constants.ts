const AUTHOR_FULL_NAME = 'Карпекин Степан Игоревич'

const BASE_URL = `http://45.141.77.2:8000`

const APP_PATHS = {
    home:  '/',
    lab: '/lab/:id',
    resultViewer: '/result-viewer',
    aboutAuthor: '/aboutus',
    newLab: '/new-lab'
}

const APP_PAGE_TITLES = {
    home: 'Главная',
    lab: 'Лаболаторная работа',
    resultViewer: 'Результат',
    aboutAuthor: 'Об авторе',
    newLab: 'Добавление работы'
}

const APP_ROUTES_CONFIG = {
    home: {
        path: APP_PATHS.home,
        title: APP_PAGE_TITLES.home
    },
    lab: {
        path: APP_PATHS.lab,
        title: APP_PAGE_TITLES.lab
    },
    resultViewer: {
        path: APP_PATHS.resultViewer,
        title: APP_PAGE_TITLES.resultViewer
    },
    aboutAuthor: {
        path: APP_PATHS.aboutAuthor,
        title: APP_PAGE_TITLES.aboutAuthor
    },
    newLab: {
        path: APP_PATHS.newLab,
        title: APP_PAGE_TITLES.newLab
    }
}

export { AUTHOR_FULL_NAME, APP_ROUTES_CONFIG, BASE_URL }