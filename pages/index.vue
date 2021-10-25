<template>
	<view>
			<Header class="content_top" >
			</Header>
			<grid></grid>
			<noticebar></noticebar>
	</view>
</template>
<script>
	import Header from "./index/header.vue"
	import grid from "./index/maingrids.vue"
	import noticebar from "./index/noticebar.vue"
	export default {
		data() {
			return {
				keyword: '',
			}
		},
		components: {
			Header,
			grid,
			noticebar
		},
		methods:{
		},
		mounted:function(){
		},
	}
</script>

<style lang="scss" scoped>
	.content_top {
		background-color: $app_green;
		padding-left:6vw;
		padding-right:6vw;
	}
</style>
