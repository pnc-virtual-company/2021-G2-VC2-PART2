import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import UsersView from "./components/views/UsersView.vue";
import StudentsView from "./components/views/StudentsView.vue";
import PermissionView from "./components/views/PermissionView.vue";
import DisciplesView from "./components/views/DisciplesView.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/users", component: UsersView },
    { path: "/students", component: StudentsView },
    { path: "/permission", component: PermissionView },
    { path: "/disciples", component: DisciplesView },
    { path: "/", redirect: "/users" },
  ],
});

const app = new Vue({
  router,
  vuetify,
  render: (h) => h(App),
});

app.$mount("#app");
