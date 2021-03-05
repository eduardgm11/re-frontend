import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/Tarjeta",
            name: "Tarjeta-list",
            component: () => import("./components/TarjetaList")
        },
        {
            path: "/Tarjeta/:id",
            name: "Tarjeta-details",
            component: () => import("./components/Tarjeta")
        },
        {
            path: "/add",
            name: "Add",
            component: () => import("./components/AddTarjeta")
        }
    ]
});