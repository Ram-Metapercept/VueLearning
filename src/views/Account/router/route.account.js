


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
