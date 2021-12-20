import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import Signin from './authentication/Sign_in.vue';
// import Example from './components/views/Example.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: Signin},
    // { path: "/ex", component: Example},

    // { path: "/", redirect: "/table" },
  ],
});

const app = new Vue({
  router,
  vuetify,
  render: (h) => h(App),
});

app.$mount("#app");
