import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/index'
import plugin from '@/pages/plugin'
import passValue from '@/pages/passValue'
import alert from '@/pages/alert'
import test from '@/pages/test'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/plugin',
      name: 'plugin',
      component: plugin
    },
    {
      path: '/passValue',
      name: 'passValue',
      component: passValue
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
