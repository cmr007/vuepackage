import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/app.vue'
import Me from './views/me/app.vue'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)
console.info("好iehi")
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }  
  ],
})
