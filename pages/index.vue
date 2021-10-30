<template>
	<view>
			<Header class="content_top" >
			</Header>
			<view class="content">
				<grid></grid>
				<noticebar></noticebar>		
				<treat></treat>
				<drugstore></drugstore>
				<tabbar></tabbar>
			</view>
	</view>
</template>
<script>
	import Header from "./index/header.vue"
	import grid from "./index/maingrids.vue"
	import noticebar from "./index/noticebar.vue"
	import treat from "./index/treat.vue"
	import drugstore from "./index/drugstore.vue"
	import tabbar from "./index/tabbar.vue"
	export default {
		data() {
			return {
				keyword: '',
			}
		},
		components: {
			Header,
			grid,
			noticebar,
			treat,
			drugstore,
			tabbar
		},
		methods:{
		},
		mounted:function(){
		},
	}
</script>

<style lang="scss">
	.content_top {
		background: linear-gradient(to bottom, 
			$app_green 0%, 
			$app_green 75%, 
			#F8F8F8 75%,
			#F8F8F8 100%);
		padding-left:6vw;
		padding-right:6vw;
		height:42vh;
	}
	.content
	{
		padding-left:1vw;
		padding-right:1vw;		
		background-color: #F8F8F8;
	}
</style>
