<template>
	<view class="content">
		<u-tabbar :list="tabbar"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbar : [{
						iconPath: "http://api.hzxwhzxw.asia/static/medicine.svg",
						selectedIconPath: "http://api.hzxwhzxw.asia/static/medicine_active.svg",
						text: '找药',
						pagePath: "/pages/medicine"
					},
					{
						iconPath: "http://api.hzxwhzxw.asia/static/index.svg",
						selectedIconPath: "http://api.hzxwhzxw.asia/static/index_active.svg",
						text: '首页',
						pagePath: "/pages/index"
					},
					{
						iconPath: "http://api.hzxwhzxw.asia/static/me.svg",
						selectedIconPath: "http://api.hzxwhzxw.asia/static/me_active.svg",
						text: '我的',
						pagePath: "/pages/me",
						isDot: true,
					},
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
