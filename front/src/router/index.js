import Vue from 'vue'
import VueRouter from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router';
// import Users from './../components/views/UsersView.vue';
// import Students from './../components/views/StudentsView.vue';
// import Permission from './../components/views/PermissionView.vue';
// import Disciples from './../components/views/DisciplesView.vue';
import Signin from '../authentication/Sign_in.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/Signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/',
    name: 'signin',
    component: Signin
  },
  // {
  //   path: '/Users',
  //   name: 'users',
  //   component: Users
  // },
  // {
  //   path: '/Students',
  //   name: 'students',
  //   component: Students
  // },
  // {
  //   path: '/Permission',
  //   name: 'permission',
  //   component: Permission
  // },
  // {
  //   path: '/Disciples',
  //   name: 'disciples',
  //   component: Disciples
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router