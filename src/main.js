import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/style.scss'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import App from './App.vue'

// Set paths of the components
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/contact', name: 'Contact', component: Contact }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
