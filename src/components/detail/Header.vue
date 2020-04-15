<template>
	<header>
		<div class="header-left">
			<i class="iconfont">&#xe69d;</i>
		</div>
		<div class="header-title">活动详情</div>
		<div class="header-right" @click="toHome">
			<i class="iconfont">&#xe70f;</i>
		</div>
	</header>
</template>

<script>
	export default{
		methods:{
			toHome(){
				this.$router.push({
					path:"/"
				})
			}
		}
	}
</script>

<style scoped="scoped">
	header{
		height: 1.2rem;
		background: #f7f7f7;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: .4rem;
	}
	.header-left{
		padding-left: .5rem;
	}
	.header-right{
		padding-right: .5rem;
	}

</style>
