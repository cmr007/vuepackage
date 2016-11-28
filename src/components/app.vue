<template>
	<div>
		<h1>姓名：{{name}}</h1>
		<h1>年龄：{{age}}</h1>
		<h1>嘿嘿22222</h1>
	</div>
</template>
<script>
module.exports = {
  el:"#app",
  //data:function(){}，下面是es6写法
  data: function(){
    return {
      name:"kally",
      age:"2q1"
    }
  }
}	
</script>