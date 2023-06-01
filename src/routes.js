import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppShow from "./pages/AppShow.vue";
import AppWineList from "./pages/AppWineList.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
            path: "/",
            name: "home",
            component: AppHome,
       },

       {
        path: "/wines",
        name: "wines",
        component: AppWineList,
        },

        {
            path: "/wines/:id",
            name: "show",
            component: AppShow,
        },
    ]
});

export {router};