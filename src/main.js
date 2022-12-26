import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/style.scss'
import HomePage from './components/HomePage.vue'
import ContactPage from './components/ContactPage.vue'
import Button from './components/items/Button.vue'
import Link from './components/items/Link.vue'
import Strip from './components/items/Strip.vue'
import App from './App.vue'

// Set paths of the components
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'HomePage', component: HomePage },
        { path: '/contact', name: 'ContactPage', component: ContactPage },
        { path: '/:pathMatch(.*)', name: 'ContactPage', component: HomePage }
    ]
})

createApp(App)
    .component('Button', Button)
    .component('Link', Link)
    .component('Strip', Strip)
    .use(router)
    .mount('#app')
