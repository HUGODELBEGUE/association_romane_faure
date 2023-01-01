import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/style.scss'
import HomePage from './components/HomePage.vue'
import ContactPage from './components/ContactPage.vue'
import Logo from './components/items/Logo.vue'
import Map from './components/items/Map.vue'
import Button from './components/items/Button.vue'
import LinkBlock from './components/items/LinkBlock.vue'
import Link from './components/items/Link.vue'
import Strip from './components/items/Strip.vue'
import App from './App.vue'

// Set paths of the components
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'HomePage', component: HomePage },
        { path: '/contact', name: 'ContactPage', component: ContactPage },
        { path: '/:pathMatch(.*)', redirect: '/' }
    ]
})

createApp(App)
    .component('Logo', Logo)
    .component('Map', Map)
    .component('Button', Button)
    .component('LinkBlock', LinkBlock)
    .component('Link', Link)
    .component('Strip', Strip)
    .use(router)
    .mount('#app')
