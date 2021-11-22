import Vue from 'vue'
import VueRouter from 'vue-router'
import quienesSomos from '../components/quienes-somos.vue'
import misionVision from '../components/mision-vision.vue';
import valoresEstrategias from '../components/valores-estrategicos.vue';
import equipo from '../components/equipo.vue';
import tecnologias from '../components/tecnologias.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/quienes-somos',
    name: 'quienes-somos',
    component: quienesSomos
  },
  {
    path: '/mision-vision',
    name: 'mision-vision',
    component: misionVision
  },
  {
    path: '/valores-estrategias',
    name: 'valores-estrategias',
    component: valoresEstrategias
  },
  {
    path: '/equipo',
    name: 'equipo',
    component: equipo
  },
  {
    path: '/tecnologias',
    name: 'tecnologias',
    component: tecnologias
  },
]

const router = new VueRouter({
  routes
})

export default router
