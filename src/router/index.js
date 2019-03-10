import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import CandidateServices from '@/components/CandidateServices'
import ChooseLanguage from '@/components/ChooseLanguage'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Navigation from '@/components/Navigation'
import News from '@/components/News'
import Testimony from '@/components/Testimony'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/candidateservices',
      name: 'CandidateServices',
      component: CandidateServices
    },
    {
      path: '/chooselanguage',
      name: 'ChooseLanguage',
      component: ChooseLanguage
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/testimony',
      name: 'Testimony',
      component: Testimony
    }
  ]
})
