import Vue from 'vue'
import VueRouter from 'vue-router'

// COMPONENTES
import notFound404 from '../views/NotFound404.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/mis-contenidos',
    name: 'MisContenidos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consumo.vue')
  },
  {
    path: '/mi-cuenta',
    name: 'MiCuenta',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cuenta.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  { path: '/404', component: notFound404 },
  {
    // matches everything else  
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/registro', '/404'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // Si tratas de entrar a una pagina no publica y no estás logeado
  // Redirige a la página de inicio
  if (authRequired && !loggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router
