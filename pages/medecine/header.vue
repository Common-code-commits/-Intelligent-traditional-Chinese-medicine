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
			<u-search placeholder="桂枝汤" v-model="keyword" :show-action="false">
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
				categoryList: [{
						id: 1,
						name: '鼻塞',
						img: 'http://api.hzxwhzxw.asia/static/鼻子.png'
					},
					{
						id: 2,
						name: '咳嗽',
						img: 'http://api.hzxwhzxw.asia/static/肺部.png'
					},
					{
						id: 3,
						name: '胃病',
						img: 'http://api.hzxwhzxw.asia/static/胃.png'
					},
					{
						id: 4,
						name: '牙痛',
						img: 'http://api.hzxwhzxw.asia/static/牙齿.png'
					},
					{
						id: 5,
						name: '腹痛',
						img: 'http://api.hzxwhzxw.asia/static/腹部.png'
					},
					{
						id: 6,
						name: '骨痛',
						img: 'http://api.hzxwhzxw.asia/static/骨科.png'
					},
					{
						id: 7,
						name: '儿童',
						img: 'http://api.hzxwhzxw.asia/static/孩子.png'
					},
					{
						id: 8,
						name: '外伤',
						img: 'http://api.hzxwhzxw.asia/static/创口贴.png'
					}
				],
			}
		},
		components: {
			scanner,
			messages,
			category
		},
		methods: {
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
