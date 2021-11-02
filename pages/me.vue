<template>
	<view>
		<u-navbar  :is-back="false"
				    :height="statusbarheight"
				   :background="background"
				   :border-bottom="false"
		></u-navbar>
		<user></user>
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
	import user from "./me/users.vue"
	export default {
		data() {
			return {
				t5:'我的医生',
				t6:'我的预约',
				t7:'我的提醒',
				background:{
					 background: '#44E8A8'
				},
				statusbarheight:"0"
			}
		},
		components:{
			user
		},
		methods: {
			setstatusBarHeight:function(){
				// #ifdef MP-WEIXIN
				this.statusbarheight = uni.getMenuButtonBoundingClientRect().height
				// #endif
				// #ifdef MP-WEIXIN
				this.statusbarheight = uni.getSystemInfoSync().statusBarHeight
				// #endif
			}
		},
		mounted: function() {
			this.setstatusBarHeight()
		},
	}
</script>

<style lang="scss" scoped>
	
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
