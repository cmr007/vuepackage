<style scoped>
.mainMsg .msg .content-header{
  font-size: 1.5rem;
}
</style>
<template>
<div class = "mainMsg">
    <div class = "msg">
      <p class="content-header">The hotel chain the best choice for you!</p>
     <!--  <p class="contentMsg" @click="show = !show">{{content}}</p> -->
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