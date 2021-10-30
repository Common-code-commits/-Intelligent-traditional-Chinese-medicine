<template>
	<view>
		<u-card :show-head="false"
				:show-foot="false"
				:border="false">
			<view class="" slot="body">
				<view class="u-body-item">
				</view>
			</view>
		</u-card>		
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	}
};
</script>

<style scoped lang="scss">
	.u-card-wrap { 
		background-color: $u-bg-color;
		padding: 1px;
	}
	
	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}
		
	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
</style>