import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demandeur/formulaire',
    name: 'Form',
    // route level code-splitting
    // this generates a separate chunk (form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "form" */ '../components/demandeur/Form.vue')
  },
  {
    path: '/demandeur/informations',
    name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (info.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "info" */ '../components/demandeur/Info.vue')
  },
  {
    path: '/adherent/bordereau',
    name: 'Bordereau',
    // route level code-splitting
    // this generates a separate chunk (info.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bordereau" */ '../components/adherent/Bordereau.vue')
  },
  {
    path: '/adherent/fiche-de-frais/:idFiche',
    name: 'Fichefrais',
    // route level code-splitting
    // this generates a separate chunk (info.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "fichefrais" */ '../components/adherent/Fichefrais.vue')
  },
  {
    path: '/adherent/mon-bordereau',
    name: 'ModelBordereau',
    // route level code-splitting
    // this generates a separate chunk (info.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "modelBordereau" */ '../components/adherent/M-bordreau.vue')
  },
  {
    path: '/tresorier/les-bordereaux',
    name: 'Allbordereau',
    // route level code-splitting
    // this generates a separate chunk (info.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "allbordereau" */ '../components/tresorier/Allbordereau.vue')
  },
  {
    path: '/tresorier/document-cerfa',
    name: 'DocumentCerfa',
    // route level code-splitting
    // this generates a separate chunk (info.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "allbordereau" */ '../components/tresorier/Documentcerfa.vue')
  },
  {
    path: '/admin/gestion-utilisateurs',
    name: 'GestionUser',
    // route level code-splitting
    // this generates a separate chunk (form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "gestionuser" */ '../components/admin/gestionUser.vue')
  },
  {
    path: '/admin/ajouter-utilisateur/:idUser',
    name: 'FormUser',
    // route level code-splitting
    // this generates a separate chunk (form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "formuser" */ '../components/admin/formUser.vue')
  },
  {
    path: '/admin/modifier-demandeur',
    name: 'FormDemandeur',
    // route level code-splitting
    // this generates a separate chunk (form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "formdemandeur" */ '../components/admin/formDemandeur.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router