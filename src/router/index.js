import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoulesView from '../views/RoulesView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/LoginView.vue'
import { auth } from '../firebase'
import CreateComponentView from '../views/CreateComponentView.vue'
import IndexComponent from '../views/IndexComponent.vue';
import EditComponent from '../views/EditComponent.vue';
import SpecificPostView from '../views/SpecificPostView.vue';


// Routes for the application
const routes = [
  {
    path: '/', 
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false
  }
  },
  {
    path: '/create',
    name: 'create',
    component: CreateComponentView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/posts',
    name: 'posts',
    component: IndexComponent,
    meta: {
      requiresAuth: true
  }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditComponent,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/roules',
    name: 'roules',
    component: RoulesView,
    meta: {
      requiresAuth: false
    }
  },
  {
  path: '/specific',
  name: 'specific',
  component: SpecificPostView,
  },
  //  all other routes will be redirected to the 404 page
  {
    path: '/:catchAll(.*)', 
    name: 'NotFound',
    component: NotFoundView
  },
  
]
// history for the application routes 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes 
})
// before each route, check if user is authenticated
router.beforeEach((to, from, next) => { 
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }
// Checks if user is authenticated and redirects to login if not
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) { 
    next('/login')
    return;
  }

  next(); 
})
// export router
export default router 
