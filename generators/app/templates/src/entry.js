require("./styles/style.css");
var Vue = require("vue")
var app = require('./components/app.vue');
Vue.config.debug = true;//开启错误提示
new Vue(app);