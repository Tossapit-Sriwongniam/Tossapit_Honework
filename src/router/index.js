import Vue from "vue";
import Router from "vue-router";
import Profile from "../components/Profile";
import vmodel from "../components/Contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Profile
    },
    {
      path: "/Contact",
      component: vmodel
    }
  ]
});

document.body.style.backgroundColor = "#666699";
