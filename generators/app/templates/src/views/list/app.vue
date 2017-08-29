<style scoped>
	.detail {
		min-height: 100%;
    background: #F4F7F9;
    color: #000;
	}
	.detail header {
		height: 50px;
    margin-bottom: 4.5%;
    padding-left: 5%;
    line-height: 50px;
    padding-right: 5%;
	}
	.detail header .icon-left {
		float: left;
		font-size: 1.3rem
	}
	.detail header .icon-right {
		float: right;
		font-size: 1.3rem
	}
	.detail .img-list {
		width: 100%;
	}
	.detail .img-list ul {
		display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
	}
	.detail .img-list ul li {
  	background: #fff;
    height: 150px;
    box-shadow: 0 4px 4px #CED2E8;
    border-radius: 3px;
    display: table;
    width: 90%;
    margin: 1.5% auto;
  }
  .detail .img-list ul li > div {
    width: 50%;
    height: 150px;
 		display: table-cell;
  }
  .detail .img-list ul li > div span {
  	display: block;
  }
  .detail .img-list ul li > div .hotel-name {
  	margin-top: 45px;
    margin-left: 10px;
    font-size: 14px;
  }
  .detail .img-list ul li > div .distance {
  	font-size: 12px;
    margin-top: 10px;
    margin-left: 10px;
    color: #ccc;
  }
  .detail .img-list ul li .content-right {
    display: table-cell;
    vertical-align: middle;
    text-align: right;
  }
  .detail .img-list ul li .content-right img {
  	width: 120px;
  	height: 120px;
  }
</style>
<template>
<div class="detail">
	<header>
		<i class="iconfont icon-home icon-left" @click="handle('home')"></i>
		<i class="iconfont icon-center icon-right" @click="handle('center')"></i>
	</header>
	<section class="img-list">
		<ul>
			<li>
				<div class="content-left">
					<span class="hotel-name">Hotel First</span>
					<span class="distance">Distance 456meter</span>
				</div>
				<div class="content-right"><img src="./image/img-1.png" alt=""></div>
			</li>
			<li>
				<div class="content-left">
					<span class="hotel-name">Hotel First</span>
					<span class="distance">Distance 756meter</span>
				</div>
				<div class="content-right"><img src="./image/img-2.png" alt=""></div>
			</li>
			<li>
				<div class="content-left">
					<span class="hotel-name">Hotel First</span>
					<span class="distance">Distance 956meter</span>
				</div>
				<div class="content-right"><img src="./image/img-3.png" alt=""></div>
			</li>
			<li>
				<div class="content-left">
					<span class="hotel-name">Hotel First</span>
					<span class="distance">Distance 1056meter</span>
				</div>
				<div class="content-right"><img src="./image/img-4.png" alt=""></div>
			</li>
			<li>
				<div class="content-left">
					<span class="hotel-name">Hotel First</span>
					<span class="distance">Distance 1256meter</span>
				</div>
				<div class="content-right"><img src="./image/img-5.png" alt=""></div>
			</li>
		</ul>
	</section>
</div>
	
</template>
<script>
	export default {
		data(){
			return {}
		},
		methods: {
			handle(obj){
				if(obj!='home') {
					document.getElementsByTagName('i')[1].style.color="burlywood"
					this.$router.push({name:'me'})
				} else {
			  	document.getElementsByTagName('i')[0].style.color="burlywood"
			  	this.$router.push({name:'home'})
				}
			}
		}
	}
</script>