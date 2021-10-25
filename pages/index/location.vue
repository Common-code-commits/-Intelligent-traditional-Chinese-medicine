<template>
	<div class="location_box">
		<p>{{text}}</p>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				text:"北京市",
			}
		},
		created:function(){
			uni.getLocation({
			    type: 'wgs84',
				geocode:true,
			    success: function (res) {
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
					this.text = res.address.city
			    }
			})
		}
	}
</script>
<style lang="scss">
	.location_box:before{
		    content: '';
		    display: inline-block;
		    width: 24px;
		    height: 24px;
		    background-image: url("../../src/location.svg");
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
		    background-image: url("../../src/triangle.svg");
			background-size:100% 100%;
	}
	p{
		padding-left:6px;
		padding-right: 10px;
		height: 24px;
	}
</style>
