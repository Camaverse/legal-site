import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/404.vue'

import LawEnforcement from './views/LawEnforcement.vue'
import TermsConditions from './views/Terms.vue'
import PrivacyPolicy from './views/Privacy.vue'
import Cookies from './views/Cookies.vue'
import AntiSpam from './views/AntiSpam.vue'
import Refunds from './views/Refunds.vue'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/law-enforcement', name: 'LawEnforcement', component: LawEnforcement },
  { path: '/terms', name: 'TermsConditions', component: TermsConditions },
  { path: '/privacy', name: 'PrivacyPolicy', component: PrivacyPolicy },
  { path: '/cookies', name: 'Cookies', component: Cookies },
  { path: '/anti-spam', name: 'AntiSpam', component: AntiSpam },
  { path: '/refunds', name: 'Refunds', component: Refunds },
    { path: '*', name: 'Not Found', component: NotFound }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
