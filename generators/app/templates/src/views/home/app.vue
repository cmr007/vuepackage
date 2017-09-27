<style scoped>
.main-msg .msg .content-header{
  font-size: 1.2rem;
  margin-left: 0.5rem;
}
.main-msg .msg .content-msg{
  width: 100%;
}
.main-msg .msg .logo{
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
}
.main-msg .msg .logo img {
  width: 2.5rem;
}
.main-msg .msg .detail {
  color: #ccc;
  margin-top: 2rem;
  text-align: right;
  margin-right: 1rem;
  font-size: 0.5rem;
}
.main-msg .msg .detail a{
  color: #A9A9A9;
}
.main-msg .msg .content-msg img{
  width: 100%;
}
</style>
<template>
<div class = "main-msg">
  <div class = "msg">
    <div class="content-header">Where</div>
    <div class="content-header">do you want </div>
    <div class="content-header">to live ?</div>
    <div class="detail">
    <router-link :to="'list'">see all ></router-link>
    </div>
    <div class="content-msg">
      <img src="./image/hotel.png"/>
    </div>
    <div class="logo">
      <img src="./image/logo-1.png" alt="">
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      detail:"卖座网",
      show: false
    }
  },
  methods: {
    showMsg(){
      let vm = this
      vm.content = vm.detail
    }

  }
}
</script>