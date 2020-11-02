import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Page1 from './components/Page1'

Vue.use(VueRouter);

const routes = [
  {
    path: "/hello",
    name: "hello",
    component: HelloWorld
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page1
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;