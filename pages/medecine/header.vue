<template>
	<view class="top" >
		<view class="nagivator" >
			<view>
				<text class="title">找药</text>
			</view>
			<view class="nagivator_right">
				<scanner></scanner>
				<messages></messages>
			</view>
		</view>
		<view class="search_box">
			<u-search placeholder="桂枝汤" v-model="keyword" :show-action="false" @search="search()">
			</u-search>
		</view>
		<category></category>
	</view>
</template>

<script>
	import scanner from "../index/scanner.vue"
	import messages from "../index/messages.vue"
	import category from "./category.vue"
	export default {
		data() {
			return {
				keyword: "",
				categoryList: [],
			}
		},
		components: {
			scanner,
			messages,
			category
		},
		methods: {
			search: function() {
				var that = this
				console.log(this.keyword)
				uni.request({
					url: 'https://api.hzxwhzxw.asia/searchmed',
					data: {
						keyword: that.keyword
					},
					success: (res) => {
						console.log(res.data)
					},
					fail: (res) => {
						console.log('get失败')
					}
				})
			}
		},
		created: function() {
		}
	}
</script>
<style lang="scss" scoped>
	.search_box
	{
		width:100%;
	}
	.top {
		padding-top: 3vh;
		width: 100%;
		background: linear-gradient(to bottom,
				$app_green 0%,
				$app_green 60%,
				rgba(0,0,0,0) 60%,
				rgba(0,0,0,0) 100%);
		padding-left: 6vw;
		padding-right: 6vw;
	}
	.nagivator {
		padding-bottom: 2vh;
		flex-shrink: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nagivator_right {
		width: 18vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nagivator .title {
		width: 10vw;
		font-size: 20px;
		color: white;
	}

</style>
