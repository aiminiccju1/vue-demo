import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tmpl from '@/view/tmpl'
import First from '@/components/views/First'
import Second from '@/components/views/Second'

Vue.use(Router)

const include = function (path) {
  return () => import(`@/components/views/${path}`)
}

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
      component: include(First)
    },
    {
      path: '/second',
      name: 'Second',
      component: include(Second)
    },
    //  测试页面
    {
      path: '/tmpl',
      name: 'Tmpl',
      component: tmpl
    }
  ]
})
