import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/tarjeta",
            name: "tarjeta",
            component: () => import("./components/TarjetaList")
        },
        {
            path: "/tarjeta/:id",
            name: "tarjeta-details",
            component: () => import("./components/Tarjeta")
        },
        {
            path: "/add",
            name: "add",
            component: () => import("./components/AddTarjeta")
        }
    ]
});