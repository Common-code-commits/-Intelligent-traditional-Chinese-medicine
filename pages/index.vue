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

<style lang="scss">
	.content_top {
		background: linear-gradient(to bottom, $app_green 0%, $app_green 75%, white 75%,white 100%);
		padding-left:6vw;
		padding-right:6vw;
		height:42vh;
	}
</style>
