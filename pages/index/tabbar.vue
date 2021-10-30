<template>
	<view class="content">
		<u-tabbar :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbar : [{
						iconPath: "",
						selectedIconPath: "",
						text: '找药',
						isDot: true,
						pagePath: "/pages/medicine"
					},
					{
						iconPath: "",
						selectedIconPath: "",
						text: '首页',
						midButton: true,
						pagePath: "/pages/index"
					},
					{
						iconPath: "",
						selectedIconPath: "",
						text: '我的',
						pagePath: "/pages/me"
					},
				]
			}
		}
	}
</script>

<style>
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
