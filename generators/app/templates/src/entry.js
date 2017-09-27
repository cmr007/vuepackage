import Vue from 'vue'
import './main.css'
import './iconfont/iconfont.css'
import App from './main.vue'
import router from './router'
import './views/lib/flexible.min'

new Vue({
	el: '#app',
		router,
		...App,
})

