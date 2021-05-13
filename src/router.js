import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home'
import Add from './views/Add'
import Login from './views/Login'

const routes=[
  {
    name: "Home",
    path:'/Home',
    component:Home,
  },
  {
    name: "Login",
    path:'/Login',
    component:Login,
  },
  {
    name: "Add",
    path:'/add',
    component:Add,
  },
  {
    name: "Update",
    path:'/update/:id',
    component:Add,
  },
]

const router= createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;