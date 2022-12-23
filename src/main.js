import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/style.scss'
import HomePage from './components/HomePage.vue'
import ContactPage from './components/ContactPage.vue'
import App from './App.vue'

// Set paths of the components
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'HomePage', component: HomePage },
        { path: '/contact', name: 'ContactPage', component: ContactPage }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
