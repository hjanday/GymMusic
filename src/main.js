import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Home from './components/Home.vue'
import AboutPage from './components/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({

  history: createWebHistory(),

    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: AboutPage}
    ]


})


createApp(App).use(router).mount('#app')
