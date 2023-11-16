import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import UserDetail from './components/UserDetail.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
    { path: '/user/:id', component: UserDetail, name: 'User' },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')