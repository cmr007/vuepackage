<template>
	<div class = "mainMsg">
    <div class = "msg">
      <p class="contentFirst">Hello Yeoman!</p>
      <p class="contentMsg">{{content}}</p>
    </div>
	</div>
</template>
<script>
module.exports = {
  el:"#app",
  data: function(){
    return {
      content:"电影订座，就上卖座"
    }
  }
}	
</script>