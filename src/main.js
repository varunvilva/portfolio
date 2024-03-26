import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


createApp(App).use(router).mount('#app')
