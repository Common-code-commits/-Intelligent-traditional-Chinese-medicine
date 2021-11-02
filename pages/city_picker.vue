<template>
	<view>
		<u-navbar title="城市选择" :background="background" :title-color="color" :back-icon-color="color">
			<view class="slot-wrap">
			</view>
		</u-navbar>
		<view class="content">
			<scroll-view class="city_box">
				<view 
					:class=" index == current ? 'city_item_active' : 'city_item'" 
					v-for="(item,index) in list" 
					:key="index"
					@click="setdata(item,index)">
					{{item.name}}
				</view>
			</scroll-view>
			<view class="select_box">
				<view 
					v-if="current==0"
					class="location">
					<text>当前定位</text>
					<view class="subtext">
						{{location}}
					</view>
				</view>
				<view
					v-if="current==0"
					class="location">
					<text>最近访问</text>
					<view class="subtext">
						{{location}}
					</view>
				</view>
				<view
					v-if="current==0"
					class="location">
					<text>热门城市</text>
					<view class="subtext">
						{{location}}
					</view>
				</view>
				<view
					v-if="current!=0"
					class="location">
					<text>城市列表</text>
					<view class="subtext">
						{{location}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: "#44E8A8",
				},
				color: "#FFFFFF",
				current:0,
				location:"北京",
				list: [
				    {
				        "name": "东城区",
				        "latter": "D"
				    },
				    {
				        "name": "西城区",
				        "latter": "X"
				    },
				    {
				        "name": "朝阳区",
				        "latter": "Z"
				    },
				    {
				        "name": "丰台区",
				        "latter": "F"
				    },
				    {
				        "name": "石景山区",
				        "latter": "S"
				    },
				    {
				        "name": "海淀区",
				        "latter": "H"
				    },
				    {
				        "name": "门头沟区",
				        "latter": "M"
				    },
				    {
				        "name": "房山区",
				        "latter": "F"
				    },
				    {
				        "name": "通州区",
				        "latter": "T"
				    },
				    {
				        "name": "顺义区",
				        "latter": "S"
				    },
				    {
				        "name": "昌平区",
				        "latter": "C"
				    },
				    {
				        "name": "大兴区",
				        "latter": "D"
				    },
				    {
				        "name": "怀柔区",
				        "latter": "H"
				    },
				    {
				        "name": "平谷区",
				        "latter": "P"
				    },
				    {
				        "name": "密云县",
				        "latter": "M"
				    },
				    {
				        "name": "延庆县",
				        "latter": "Y"
				    }
				]
			}
		},
		methods: {
			setdata(item,index) {
				this.current = index
			}
		}
	}
</script>
<style scoped lang="scss">
	.content
	{
		display: flex;
	}
	.city_box{
		flex-shrink: 0;
		width:26vw;
		background-color: #FAFAFA;
	}
	.city_item,.city_item_active{
		position: relative;
		width:100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2vh 3vw;
		font-size: 14px;
	}
	.city_item_active{
		font-weight: bold;
	}
	.city_item_active::after{
		position: absolute;
		right:0;
		content: "";
		width:3px;
		height:20px;
		background-color: #1DB192;
	}
	.select_box
	{
		padding-left: 4vw;		
	}
	.location{
		padding-top: 4vh;
		font-weight: bold;
	}
	.location text
	{
		font-size: 16px;
	}
	.location view
	{
		margin-top: 2vh;
		width:22vw;
		height:10vw;
		color: #1DB192;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(121,121,121,0.2);
		border-radius: 4px;
	}
	.location view::before
	{
		position: relative;
		left:-4px;
		content: "";
		display: inline-block;
		width:18px;
		height:18px;
		padding-right: 2px;
		background-image: url("http://api.hzxwhzxw.asia/static/city_location.svg");
		background-size:100% 100%;
	}
</style>
