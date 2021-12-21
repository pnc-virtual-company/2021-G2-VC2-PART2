import Vue from 'vue'
import VueRouter from 'vue-router'

import Student from '../components/users/Student.vue'
import StudentForm from '../components/users/StudentForm.vue'
import StudentTableView from '../components/views/StudentTableView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/student',
    name: 'student',
    component: Student
  },
  {
    path: '/studentform',
    name: 'studentform',
    component: StudentForm
  },
  {
    path: '/studenttableview',
    name: 'studenttableview',
    component: StudentTableView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
