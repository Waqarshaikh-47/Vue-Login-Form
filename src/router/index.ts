import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
import Employees from '../components/Employees.vue'
import Employee from '../components/Employee.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationForm
  },
  {
    path: '/employees',
    name: 'employees',
    component: Employees
  },
  {
    path: '/employee/:id',
    name: 'employee/:id',
    component: Employee
  },
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
