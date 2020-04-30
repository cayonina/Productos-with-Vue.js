import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacto from '../views/Contacto.vue'
import Usuarios from '../views/Usuarios.vue'
import Login from '../views/Login.vue'
import Singup from '../views/Singup.vue'
import Productos from '../views/productos/Index.vue'
import Detalle from '../views/productos/Detalle.vue'
// es sensible al direccionamiento y al nombre de los archivos asi sea mayuscula o minuscula, debe ser exactamente igual

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About  //() => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/usuarios/:id',
    name: 'usuarios',
    component: Usuarios
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/singup',
    name: 'singup',
    component: Singup
  },
  {
    path: '/registrarse',
    redirect: 'singup'   
  },
  {
    path: '/productos',
    name: 'productos',
    component: Productos

  }, 
  {
    // parad darle parametros de envio a otra vista
    path: '/producto-detalle/:id',
    name: 'producto',
    component: Detalle

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
