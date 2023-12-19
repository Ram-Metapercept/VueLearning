// import {createRouter, createWebHistory} from "vue-router"
// // import DashBoard from "../views/DashBoard.vue"
// // import SignUpForm from "../views/SignUpForm.vue"
// // import LoginForm from "../views/LoginForm.vue"
// import AccountRouter from "../views/Account/route.account"
// var allRoutes = []
// allRoutes = allRoutes.concat(AccountRouter)

// const routes = allRoutes


// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes
// })

// export default router

import { createRouter, createWebHistory } from "vue-router";
import AccountRouter from "../views/Account/router/route.account";
import DashBoardRouter from "../views/Dashboard/router/route.dashboard"
import ComingSoonRouter from "../views/ComingSoon/router/route.comingSoon"
const allRoutes = [
  ...AccountRouter,
 ...DashBoardRouter,
  ...ComingSoonRouter

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
});

export default router;



// import Vue from 'vue'
// import VueRouter from 'vue-router'

// import AccountRouter from "../views/Account/route.account"
// import DashBoardRouter from "../views/Dashboard/router/route.dashboard"



// Vue.use(VueRouter)



// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// });

// export default router