import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    component: () => import("@/views/welcome.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/authorization.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
