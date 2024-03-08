import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { store } from './store';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Registration from './components/Registration.vue';
import Profile from './components/Profile.vue';



const router=createRouter({
  history: createWebHistory(),
  routes:[{
    name:'Home',
    path:'/',
    component: Home,
  },
  {
    name:'Login',
    path:'/login',
    component: Login,
  },
  {
    name:'Registration',
    path:'/registration',
    component: Registration,
  },
  {
    name:'Profile',
    path:'/profile',
    component: Profile,
  }]
});

const app=createApp(App).use(router).use(store)
app.mount('#app')
