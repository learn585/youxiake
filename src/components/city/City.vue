<template>
	<div class="city">
		<Header></Header>
		<List></List>
	</div>
</template>

<script>
	//引入Header组件
	import Header from './Header.vue'
	//引入City组件
	import List from './List.vue'
	export default{
		//组件
		components:{
			//Header组件
			Header,
			//List组件
			List
		}
	}
</script>

<style>
</style>
