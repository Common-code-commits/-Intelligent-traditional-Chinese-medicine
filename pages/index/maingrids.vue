<template>
	<view>
		<u-grid :col="4" @click="click" >
			<u-grid-item v-for="(item, index) in list" :index="index" :key="index">
				<u-icon :name="item" :size="46"></u-icon>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email']
			};
		},
		methods: {
			change(e) {
				console.log("test")
			},
			click(e)
			{
				console.log("test")				
			}
		}
	};
</script>

<style scoped lang="scss">
	/* 下方这些scss变量为uView内置变量，详见开发  组件-指南-内置样式 */

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.swiper {
	}

</style>
