import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import addnews from '@/components/addnews'
import adduser from '@/components/adduser'
import login from '@/components/login'
import register from '@/components/register'
import news from '@/components/news'
import user from '@/components/user'
import NewView from '../components/NewView.vue'
import person from '@/components/person'
import newchat from '@/components/newchat'
// import router from './router'

Vue.use(Router)

export default new Router({
  base:"/dist/",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/addnews',
      name: 'addnews',
      component: addnews
    }, {
      path: '/adduser',
      name: 'adduser',
      component: adduser
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/news',
      name: 'news',
      component: news
    }, {
      path: '/register',
      name: 'register',
      component: register
    }, {
      path: '/user',
      name: 'user',
      component: user
    },
    
      {
        path: '/NewView/:id',
        component: NewView
    },{
      path: '/person',
      name: 'person',
      component: person,
    
    },{
      path: '/newchat',
      name: 'newchat',
      component: newchat
    }
    
  ]
})

