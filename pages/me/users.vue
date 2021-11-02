<template>
	<view class="top" >
		<view class="nagivator">
			<view class="nagivator_right">
				<scanner></scanner>
				<messages></messages>				
			</view>
		</view>
		<view class="center">
			<view class="center_top">
				<view class="center_image">
					<image class="user_head" src="https://img2.baidu.com/it/u=3761092847,3391042259&fm=26&fmt=auto">
					</image>
				</view>
				<view class="center_info">
					<text class="center_name">{{name}}</text>
					<text class="center_phone">{{phone_number}}</text>
				</view>
			</view>
		</view>
		<u-gap height="1" bg-color="rgba(0,0,0,0)"></u-gap>
		<image src='http://docfile.funkingka.cn/FqzmiFqvXbHg-cfbquNRlawHUgHt' mode='scaleToFill'
			class='gif-wave'></image>
	</view>
</template>

<script>
	import scanner from "../index/scanner.vue"
	import messages from "../index/messages.vue"
	export default {
		data() {
			return {
				name: '橘子味',
				phone_number: '12345678',
				t3: '我的诊疗',
				t4: '我的订单',
			}
		},
		components:{
			scanner,
			messages
		},
		methods: {

		},
		created:function(){
		}
	}	
</script>

<style lang="scss" scoped>
	.top {
		width: 100%;
		background:$app_green;
		position: relative;
		padding: 0 6vw;
	}
	.nagivator{
		padding-top: 3vh;
		width: 100%;
		display: flex;
		justify-content:flex-end;
		align-items: center;		
	}
	.nagivator_right{
		display: flex;
		width:18vw;
		justify-content: space-between;
		align-items: center;
	}
	.center {
		width: 95%;
		display: flex;
		background-color: rgba(0,0,0,0);
		align-items: center;
		margin-left:auto;
		margin-right: auto;
		margin-bottom: 6vh;
		margin-top: 2vh;
		padding: 2vh 0;
		border-radius: 5px;
		color: white;
	}
	
	.center_top {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 80%;
		height: 80px;
		margin: 0 auto;
	}
	
	.center_img {
		width: 66px;
		height: 66px;
		border-radius: 50%;
		overflow: hidden;
	}
	
	.center_img image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.center_img .user_head {
		width: 100%;
		height: 100%;
	}
	
	.center_info {
		display: flex;
		flex-direction: column;
		margin-top: 10rpx;
		margin-left: 30px;
	}
	
	.center_name {
		font-size: 20px;
	}
	
	.center_phone {
		padding-top: 10px;
		font-size: 16px;
	}
	
	.center_down {
		display: flex;
		flex-direction: row;
		width: 80%;
		height: 35px;
		margin: 0 auto;
		margin-top: 20rpx;
	}
	
	.center_rank {
		width: 50%;
		height: 35px;
		display: flex;
		flex-direction: row;
	}
	
	.rank_text {
		height: 35px;
		line-height: 35px;
		margin-left: 10rpx;
		color: #AAAAAA;
	}
	
	.rank_icon {
		height: 45%;
		width: 45%;
	}
	
	.center_rank image {
		width: 35px;
		height: 35px;
	}
	
	.center_score {
		width: 50%;
		height: 35px;
		display: flex;
		flex-direction: row;
	}
	
	.center_score image {
		width: 35px;
		height: 35px;
	}
	
	.gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 10vh;
	}
	
	.user_head {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		display: flex;
		overflow: hidden;
		text-align: center;
	}
</style>
