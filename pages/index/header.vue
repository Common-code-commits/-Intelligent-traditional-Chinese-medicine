<template>
	<view :style="{paddingTop: statusBarHeight + 'px'}">
		<view class="top">
			<view>
				<location></location>
			</view>
			<view class="top_right">
				<scanner></scanner>
				<messages></messages>
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
		<Swiper></Swiper>
	</view>
</template>

<script>
	import location from "./location.vue"
	import scanner from "./scanner.vue"
	import messages from "./messages.vue"
	import tabs from "./tabs.vue"
	import Swiper from "./Swiper.vue"
	export default {
		data() {
			return {
				keyword: "",
				statusBarHeight: 0,
			}
		},
		components: {
			location,
			scanner,
			messages,
			tabs,
			Swiper,
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
<style lang="scss">
	.search_box,
	.top {
		width: 100%;
	}
	.top {
		padding-top: 2vh;
		padding-bottom: 2vh;
		display: flex;
		justify-content: space-between;
	}
	.tabs_box
	{
		margin: 2vh 0;
	}
	.top_right{
		width:16vw;
		display: flex;
		justify-content: space-between;
	}
</style>
