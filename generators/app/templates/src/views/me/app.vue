<style scoped>
	.center .login{
		width: 100%;
		color: #3678C9;
	}
	.center .login .title{
    margin: 1rem auto;
    width: 80%;
    line-height: 1rem;
    height: 1rem;
	}
	.center .login .title .icon-left {
		font-size: 0.7rem;
		float: right;
	}
	.center .login .input-list{
		margin: 0 auto;
  	width: 80%;
	}
	.center .login .bottom{
		width: 80%;
		margin: 1rem auto;
		height: 0.533333rem;
		line-height: 0.533333rem;
	}
	.center .login .bottom .forgot-pwd {
		float: left;
		width: 50%;
		font-size: 0.32rem;
	}
	.center .login .bottom .login-btn {
		float: right;
    width: 50%;
    font-size: 0.346667rem;
    text-align: center;
    background: #3678C9;
    color: #fff;
    padding-top: 0.133333rem;
    padding-bottom: 0.133333rem;
    border-radius: 0.133333rem;
	}
	.center .login .input-list input{
		margin: 0.6rem auto;
  	width: 100%;
  	border: none;
  	border-bottom: 0.026667rem solid #ccc;
  	outline: none;
	}
	:-moz-placeholder {
  	color: #000; opacity:0.2; 
	}

	::-moz-placeholder {
  	color: #000;opacity:0.2;
	}
	input:-ms-input-placeholder{
  	color: #000;opacity:0.2;
	}

	input::-webkit-input-placeholder{
  	color: #000;opacity:0.2;
	}
</style>
<template>
	<div class="center">
		<div class="login">
			<div class="title">
				<span>LOG IN</span>
				<i class="iconfont icon-home icon-left" @click='handle'></i>
			</div>
			<div class="input-list">
				<input type="text" placeholder="Email">
				<input type="text" placeholder="Password">
			</div>
			<div class="bottom">
				<div class="forgot-pwd">Forgot password?</div>
				<div class="login-btn"><span>LOG IN</span></div>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default {
		methods: {
			handle(){
				document.getElementsByTagName('i')[0].style.color="burlywood"
				this.$router.push({name:'home'})
			}
		}
	}
</script>