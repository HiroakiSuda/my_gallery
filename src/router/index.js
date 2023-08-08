import { createRouter, createWebHashHistory } from 'vue-router'
import TheMainPage from '../views/TheMainPage';
import DetailBabka from '../views/DetailBabka';
import DetailBarger from '../views/DetailBarger';
import DetailCroissant from '../views/DetailCroissant';
import DetailViennois from '../views/DetailViennois';
import DetailFluit from '../views/DetailFluit';
import DetailKouglof from '../views/DetailKouglof';
import DetailGalette from '../views/DetailGalette';

const routes = [
  {
    path: '/',
    name: 'main',
    component: TheMainPage,
    meta: { title:'Bread Gallery' }
  },
  {
    path: '/babka',
    name: 'Detailbabka',
    component: DetailBabka,
    meta: { title:'babka | Bread Gallery' }
  },
  {
    path: '/barger',
    name: 'Detailbarger',
    component: DetailBarger,
    meta: { title:'barger | Bread Gallery' }
  },
  {
    path: '/croissant',
    name: 'Detailcroissant',
    component: DetailCroissant,
    meta: { title:'croissant | Bread Gallery' }
  },
  {
    path: '/viennois',
    name: 'Detailviennois',
    component: DetailViennois,
    meta: { title:'viennois | Bread Gallery' }
  },
  {
    path: '/fluit',
    name: 'Detailfluit',
    component: DetailFluit,
    meta: { title:'fluit | Bread Gallery' }
  },
  {
    path: '/kouglof',
    name: 'Detailkouglof',
    component: DetailKouglof,
    meta: { title:'kouglof | Bread Gallery' }
  },
  {
    path: '/galette',
    name: 'Detailgalette',
    component: DetailGalette,
    meta: { title:'galette | Bread Gallery' }
  },
]

const DEFAULT_TITLE = 'Default Title'
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if(to.hash) {
      return {el: to.hash, behavior: 'smooth' };
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
})
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router