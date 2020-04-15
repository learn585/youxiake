<template>
	<Footer class="footer">
		<a href="">
			<img src="@/assets/img/footer1.png" alt="">
			<span>首页</span>
		</a>
		<a href="">
			<img src="@/assets/img/footer2.png" alt="">
			<span>订单</span>
		</a>
		<a href="">
			<img src="@/assets/img/footer3.png" alt="">
			<span>个人中心</span>
		</a>
	</Footer>
</template>

<script>
</script>

<style scoped>
	.footer{
		position: fixed;
		bottom: 0;
		z-index: 9999;
		background: #fff;
		width: 100%;
		height: 1.466666rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer a{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-decoration: none;
	}
	.footer a img{
		width: .72rem;
		height: .72rem;
		display: block;  
	}
	.footer a span{
		font-size: .35rem;
		margin-top: .2rem;
		display: block;  
	}
</style>
