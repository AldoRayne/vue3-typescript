import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../views/MainPage.vue";
import JobDetails from "../views/JobDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/job-details",
    name: "JobDetails",
    component: () => import("../views/JobDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
