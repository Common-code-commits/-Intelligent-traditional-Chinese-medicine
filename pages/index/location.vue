<template>
	<view class="location_box" @click="nagivator()">
		<p>{{text}}</p>
	</view>
</template>
<script>
	export default {
		data(){
			return{
				text:"北京市",
			}
		},
		methods:{
			nagivator:function()
			{
				uni.navigateTo({
					url:"/pages/city_picker"
				})
			}
		},
		created:function(){
			var that = this
			uni.getLocation({
			    type: 'wgs84',
				geocode:true,
			    success: function (res) {
					try{
						that.text = res.address.city						
					}catch(e){
					}
			    }
			})
		}
	}
</script>
<style lang="scss" scoped>
	.location_box:before{
		    content: '';
		    display: inline-block;
		    width: 20px;
		    height: 20px;
		    background-image: url("https://api.hzxwhzxw.asia/static/location.svg");
			background-size:100% 100%;
	}
	.location_box{
		color: white;
		font-size: 16px;
		dispLay :flex;
		align-items: center;
		text-align: center;
	}
	.location_box:after{
		    content: '';
		    display: inline-block;
		    width: 6px;
		    height: 6px;
		    background-image: url("https://api.hzxwhzxw.asia/static/triangle.svg");
			background-size:100% 100%;
	}
	p{
		padding-left:6px;
		padding-right: 10px;
		height: 24px;
	}
</style>
