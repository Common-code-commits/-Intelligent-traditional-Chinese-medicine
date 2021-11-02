<template>
	<view class="category-list">
		<view class="category" v-for="(row, index) in categoryList" :key="index" @tap="toCategory(row)">
			<view class="img">
				<image :src="row.img"></image>
			</view>
			<view class="text">{{ row.name }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: "",
				statusBarHeight: 0,
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
	}
</script>

<style lang="scss" scoped>
.category-list {
	width: 100%;
	margin: 3vh 0;
	padding-bottom: 4vh;
	border-bottom: solid 2upx #f6f6f6;
	display: flex;
	justify-content: space-between;
	background-color: white;
	flex-wrap: wrap;
	border-radius: 8px;
	.category {
		width: 25%;
		margin-top: 4vh;
		display: flex;
		flex-wrap: wrap;
		.img {
			width: 100%;
			display: flex;
			justify-content: center;
			image {
				width: 9vw;
				height: 9vw;
			}
		}
		.text {
			margin-top: 16upx;
			width: 100%;
			display: flex;
			justify-content: center;
			font-size: 24upx;
			color: #3c3c3c;
		}
	}
}
</style>
