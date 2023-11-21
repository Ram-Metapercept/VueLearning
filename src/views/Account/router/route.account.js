// import LoginForm from "../Account/LoginForm.vue"
// import SignUpForm from "../Account/SignUpForm.vue"

// const routes = [
//     routes: [
//         {
//             path: "/",
//             name: 'LoginForm',
//             component: LoginForm
//         },
//         {
//             path: "/register",
//             name: 'SignUpForm',
//             component: SignUpForm
//         }
         
    
//     ]

// ]


// export default routes


import LoginForm from "../LoginForm.vue";
import SignUpForm from "../SignUpForm.vue";

const routes = [
  {
    path: "/",
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: "/register",
    name: 'SignUpForm',
    component: SignUpForm
  }
];

export default routes;
