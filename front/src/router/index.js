import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from './../components/views/UsersView.vue';
import Students from './../components/views/StudentsView.vue';
import Permission from './../components/views/PermissionView.vue';
import Disciples from './../components/views/DisciplesView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/Users',
    name: 'users',
    component: Users
  },
  {
    path: '/Students',
    name: 'students',
    component: Students
  },
  {
    path: '/Permission',
    name: 'permission',
    component: Permission
  },
  {
    path: '/Disciples',
    name: 'disciples',
    component: Disciples
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
