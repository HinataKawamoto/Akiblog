import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Friend from '@/components/Friend.vue'
import Note from '@/components/Note.vue'
import Header from '@/components/Header.vue'
Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    {path: '/home', component: Home},
    {path:'/header',component:Header},
    { path: '/friend', component: Friend },
    { path: '/note', component: Note },
    { path: '/login', component: Login }
 ]
})

export default router
