<template>
	<view>
		<view class="top">
	        <view class="center">
				<view class="center_top">
					<view class="center_image">
						<image  class="user_head" src="https://img2.baidu.com/it/u=3761092847,3391042259&fm=26&fmt=auto"></image>
					</view>
					<view class="center_info">
						<text class="center_name">{{t1}}</text>
					<view class="center_phone">{{t2}}</view>
					</view>
				</view>
				<view class="center_down">
					<view class="center_rank">
						<image class="rank_icon" src="https://img0.baidu.com/it/u=1690281246,201617151&fm=26&fmt=auto"></image>
						<text class="rank_text">{{t3}}</text>
					</view>
					<view class="center_score">
						<image class="rank_icon" src="https://img2.baidu.com/it/u=3081028652,2085464089&fm=26&fmt=auto"></image>
						<text class="rank_text">{{t4}}</text>
					</view>
					<image src='http://docfile.funkingka.cn/FqzmiFqvXbHg-cfbquNRlawHUgHt' mode='scaleToFill' class='gif-wave'></image>
				</view>
	        </view>
	    </view>
	    <view class="bot_k">
	        <image class="bot_limg1" src="https://img1.baidu.com/it/u=3966393210,749231153&fm=26&fmt=auto"></image>
	        <text class="bot_text1">{{t5}}</text>
	        <image class="bot_img1" src="https://img0.baidu.com/it/u=2527411007,3164767474&fm=26&fmt=auto"></image>
	        <view class="bot_x1"></view>
	        <image class="bot_limg2" src="https://img0.baidu.com/it/u=2418970062,3860377055&fm=26&fmt=auto"></image>
	        <text class="bot_text2">{{t6}}</text>
	        <image class="bot_img1" src="https://img0.baidu.com/it/u=2527411007,3164767474&fm=26&fmt=auto"></image>
	        <view class="bot_x2"></view>
	        <image class="bot_limg3" src="https://img1.baidu.com/it/u=1325743522,718103638&fm=26&fmt=auto"></image>
	        <text class="bot_text3">{{t7}}</text>
	        <image class="bot_img1" src="https://img0.baidu.com/it/u=2527411007,3164767474&fm=26&fmt=auto"></image>
	    </view>
		<tabbar></tabbar>
	</view>
</template>

<script>
	import tabbar from "./index/tabbar.vue"
	export default {
		data() {
			return {
				t1:'橘子味',
				t2:'基本信息',
				t3:'我的诊疗',
				t4:'我的订单',
				t5:'我的医生',
				t6:'我的预约',
				t7:'我的提醒'
			}
		},
		onLoad() {

		},
		components:{
			tabbar
		},
		methods: {

		}
	}
</script>

<style>
	.top {
	  width: 100%;
	  height: 180px;
	  background: #23EBB9;
	  padding-top: 15px;
	  position: relative;
	}
	
	.center {
	  width: 95%;
	  height: 150px;
	  background: white;
	  display: flex;
	  flex-direction: column;
	  margin: 0 auto;
	  border-radius: 5px;
	}
	
	.center_top {
	  display: flex;
	  flex-direction: row;
	  width: 80%;
	  height: 80px;
	  margin: 0 auto;
	  margin-top: 20rpx;
	  border-bottom: 1px solid #EEEEEE;
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
	  font-size: 15px;
	}
	
	.center_phone {
	  color: #BEBEBE;
	  padding-top: 10px;
	  font-size: 13px;
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
	
	.rank_icon{
	  height:45%;
	  width:45%;
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
	  height: 100rpx;
	}
	
	.user_head{
	  width: 150rpx;
	  height:150rpx;
	  border-radius:50%;
	  display:flex;
	  overflow: hidden;
	  text-align: center;
	}
	
	.bot_k{
	  width:95%;
	  height:190px;
	  margin: 0 auto;
	  margin-top: 10px;
	  background-color:white;
	  box-shadow:0 0 6px 0 rgb(207, 203, 203);
	  border-radius: 5px;
	  position: relative;
	}
	
	.bot_x1{
	    width: 90%;
	    height: 10px;
	    margin: 0 auto;
	    margin-top: 20rpx;
	    border-bottom: 1px solid #EEEEEE;
	}
	.bot_x2{
	  width: 90%;
	  height: 10px;
	  margin: 0 auto;
	  margin-top: 20rpx;
	  border-bottom: 1px solid #EEEEEE;
	
	}
	
	.bot_img1{
	  width:25px;
	  height:25px;
	  opacity: 0.3;
	  margin-top: 18px;
	  margin-right: 7%;
	  position: relative;
	  float: right;
	}
	
	.bot_limg1{
	  width:25px;
	  height:25px;
	  margin-top: 20px;
	  margin-left: 20px;
	  border-radius: 50%;
	  position: relative;
	}
	.bot_limg2{
	  width:30px;
	  height:30px;
	  margin-top: 14px;
	  margin-left: 18px;
	  border-radius: 50%;
	  position: relative;
	}
	.bot_limg3{
	  width:32px;
	  height:32px;
	  margin-top: 10px;
	  margin-left: 16px;
	  border-radius: 50%;
	  position: relative;
	}
	
	.bot_text1{
	  left:56px;
	  top:19px;
	  color: #3d3636;
	  font-size: 17px;
	  position: absolute;
	}
	
	.bot_text2{
	  left:56px;
	  top:83px;
	  color: #3d3636;
	  font-size: 17px;
	  position: absolute;
	}
	
	.bot_text3{
	  left:56px;
	  top:149px;
	  color: #3d3636;
	  font-size: 17px;
	  position: absolute;
	}
</style>
