import {createRouter, createWebHistory} from "vue-router"
import Demo from "../Demo.vue"
import SignUpForm from "../SignUpForm.vue"
import LoginForm from "../LoginForm.vue"
import UserDashboard from "../UserDashboard.vue"
import Home from "../Home.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'LoginForm',
            component: LoginForm
        },
        {
            path: "/register",
            name: 'SignUpForm',
            component: SignUpForm
        },
        // {
        //     path: "/login",
        //     name: 'LoginForm',
        //     component: LoginForm
        // },  
          {
            path: "/dashboard",
            name: 'Demo',
            component: Demo
        }
    
    ]
})

export default router