import {createRouter, createWebHistory} from "vue-router"
// import QuizesView from "../views/QuizesView.vue"
// import QuizView from "../views/QuizView.vue"
import BitTable from "../components/BitTable.vue"
import BitDetail from "../components/BitDetail.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'BitTable',
            component: BitTable
        },
        {
            path: "/BitTable/:id",
            name: 'quiz',
            component: BitDetail
        }
    ]
})

export default router