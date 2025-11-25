import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Products.vue'
import AddProduct from '../views/AddProduct.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/products', component: Products },
  { path: '/products/new', component: AddProduct },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  const isAuth = auth.isAuthenticated
  const isLogin = to.path === '/login'

  if (!isAuth && !isLogin) return { path: '/login' }
  if (isAuth && isLogin) return { path: '/dashboard' }
})

export default router