import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Second from '@/components/views/Second'
import tmpl from '@/view/tmpl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    //  测试页面
    {
      path: '/tmpl',
      name: 'Tmpl',
      component: tmpl
    }
  ]
})
