import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Message from "../pages/Message.vue";
import Credit from "../pages/Credit.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { isMenu: false, dark: true },
  },
  {
    path: "/message",
    component: Message,
    title: "메시지",
    meta: { isMenu: true, dark: false },
  },
  {
    path: "/credit",
    component: Credit,
    title: "크레딧",
    meta: { isMenu: true, dark: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
