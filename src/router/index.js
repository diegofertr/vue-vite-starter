import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Factura from '/src/components/Factura.vue'
import Pago from '/src/components/Pago.vue'
import Parametro from '/src/components/Parametro.vue'
import Carrito from '/src/components/Carrito.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/parametro',
    name: 'Parametro',
    component: Parametro
  },
  {
    path: '/factura',
    name: 'Factura',
    component: Factura
  },
  {
    path: '/pago',
    name: 'Pago',
    component: Pago
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router