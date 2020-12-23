import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '../store/index';


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            public: true

        }

    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
        meta: {
            public: true

        }
    },
    {
        path: '/usuario',
        name: 'usuario',
        component: () => import(/* webpackChunkName: "about" */ '../components/Usuario.vue'),
        meta: {
            auth: true
        }
    },
    {
        path: "/categoria",
        name: "categoria",
        component: () => import(/* webpackChunkName: "about" */ '../views/Categorias.vue'),
        meta: {
            auth: true
        }

    },

    {
        path: "/articulo",
        name: "articulo",
        component: () => import(/* webpackChunkName: "about" */ '../views/Articulos.vue'),
        meta: {
            auth: true
        }

    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.public)) {
        next();
    } else if (store.state.usuario) {
        if (to.matched.some(record => record.meta.auth)) {
            console.log(store.state.usuario);
            next();
        }
    } else {
        next({ name: "login" });
    }
})

export default router;