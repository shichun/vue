import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Data from '@/components/Data'
import Setting from '@/components/Setting'
import KitsDetail from '@/components/kits/KitsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/data',
      name: 'Data',
      component: Data
    }, {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/kits/:uid',
      name: 'KitsDetail',
      component: KitsDetail
    }
  ]
})
