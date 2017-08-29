import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/app.vue'
import Me from './views/me/app.vue'
import List from './views/list/app.vue'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path: '/list',
    	name: 'list',
    	component: List
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }  
  ],
})
