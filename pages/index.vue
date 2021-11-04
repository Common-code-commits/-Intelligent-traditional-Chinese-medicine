<template>
	<view>
		<u-navbar  :is-back="false"
				    :height="statusbarheight"
				   :background="background"
				   :border-bottom="false"
		></u-navbar>
		<Header>
		</Header>
		<view class="content">
			<grid></grid>
			<noticebar></noticebar>
			<treat></treat>
			<drugstore></drugstore>
		</view>
		<tabbar></tabbar>
	</view>
</template>
<script>
	import Header from "./index/header.vue"
	import grid from "./index/maingrids.vue"
	import noticebar from "./index/noticebar.vue"
	import treat from "./index/treat.vue"
	import drugstore from "./index/drugstore.vue"
	export default {
		data() {
			return {
				keyword: '',
				animationData: {},
				off: false,
				statusbarheight : "0",
				background:{
					 background: '#44E8A8'
				}
			}
		},
		components: {
			Header,
			grid,
			noticebar,
			treat,
			drugstore
		},
		methods: {
			setstatusBarHeight:function(){
				// #ifdef MP-WEIXIN
				this.statusbarheight = uni.getMenuButtonBoundingClientRect().height
				// #endif
				// #ifdef MP-WEIXIN
				this.statusbarheight = uni.getSystemInfoSync().statusBarHeight
				// #endif
			}
		},
		created: function() {
			this.setstatusBarHeight()
		},
	}
</script>

<style lang="scss" >

	.content {
		padding-left: 1vw;
		padding-right: 1vw;
	}

</style>
