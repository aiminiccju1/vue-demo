// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Element from 'element-ui'
import App from './App'
import router from './router'

//  国际化
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
import i18n from './locale/index'

Vue.config.productionTip = false

// Vue.use(VueI18n)
//
// const messages = {
//   en: {
//     message: 'hello',
//     ...enLocale
//   },
//   zh: {
//     message: '你好',
//     ...zhLocale
//   }
// }
// // Create VueI18n instance with options
// const i18n = new VueI18n({
//   locale: 'en', // set locale
//   messages // set locale messages
// })
//
// ElementLocale.i18n((key, value) => i18n.t(key, value))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
