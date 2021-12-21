import Vue from 'vue'
import VueRouter from 'vue-router'

import Student from '../components/views/Student.vue'
import StudentForm from '../components/views/StudentForm.vue'

Vue.use(VueRouter)

const routes = [
  { path: "/student", component: Student },
  { path: "/studentform", component: StudentForm }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
