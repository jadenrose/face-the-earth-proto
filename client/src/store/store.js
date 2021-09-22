import { readonly, reactive } from '@vue/reactivity'

import Home from '../views/home/Home'
import { routes } from '../router/router'

const state = reactive({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
    ],
    socials: [
        {
            id: 's0',
            className: 'fa-facebook',
            name: 'facebook',
            url: 'https://www.facebook.com/FacetheEarth',
        },
        {
            id: 's1',
            className: 'fa-instagram',
            name: 'instagram',
            url: 'https://www.instagram.com/facetheearth',
        },
        {
            id: 's2',
            className: 'fa-youtube',
            name: 'youtube',
            icon: '../src/assets/img/yt.svg',
            url:
                'https://www.youtube.com/channel/UCynYkCrwJCfNNLc7Z03yhKA/featured',
        },
        {
            id: 's3',
            className: 'fa-spotify',
            name: 'spotify',
            url: 'https://open.spotify.com/artist/3B8dM8jspZ4ADCUXvVszi6',
        },
    ],
    showMobileNav: false,
})

const setRoutes = () => {
    state.routes = routes
}

const setShowMobileNav = (val) => {
    state.showMobileNav = val
}

setRoutes()

export default {
    state: readonly(state),
    setShowMobileNav,
}
