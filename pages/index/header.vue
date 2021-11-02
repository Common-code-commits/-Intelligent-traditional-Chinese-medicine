<template>
	<view class="content_top" >
		<view class="top">
			<view>
				<location></location>
			</view>
			<view class="top_right">
				<myscanner></myscanner>
				<mymessages></mymessages>
			</view>
		</view>
		<view class="search_box">
			<u-search placeholder="桂枝汤" 
					  v-model="keyword" 
					  :show-action="false">
			</u-search>
		</view>
		<view class="tabs_box">
			<tabs></tabs>
		</view>
		<myswiper></myswiper>
	</view>
</template>

<script>
	import location from "./location.vue"
	import myscanner from "./scanner.vue"
	import mymessages from "./messages.vue"
	import tabs from "./tabs.vue"
	import myswiper from "./Swiper.vue"
	export default {
		data() {
			return {
				keyword: "",
				statusBarHeight: 0,
			}
		},
		components: {
			location,
			myscanner,
			mymessages,
			tabs,
			myswiper,
		},
		methods: {
			setheader: function() {
				this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			}
		},
		created: function() {
			this.setheader()
		}
	}
</script>
<style lang="scss" scoped>
	.content_top {
		padding-top: 3vh;
		background: linear-gradient(to bottom,
				$app_green 0%,
				$app_green 75%,
				rgba(0,0,0,0) 75%,
				rgba(0,0,0,0) 100%);
		padding-left: 6vw;
		padding-right: 6vw;
	}
	.search_box,
	.top {
		width: 100%;
	}
	.top {
		padding-bottom: 2vh;
		display: flex;
		justify-content: space-between;
	}
	.tabs_box
	{
		margin: 2vh 0;
	}
	.top_right{
		width:18vw;
		display: flex;
		justify-content: space-between;
		align-items:center;
	}
</style>
