import { createRouter, createWebHistory } from "vue-router";
import {MainPage,AboutPage,DeliveryPage,PaymentPage,WarrantyPage} from "./pages";

export default createRouter({
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/about_us",
      component: AboutPage,
    },
    {
      path: "/delivery",
      component: DeliveryPage,
    },
    {
      path: "/payment",
      component: PaymentPage,
    },
    {
      path: "/warranty",
      component: WarrantyPage,
    },
  ],
  history: createWebHistory(),
});
