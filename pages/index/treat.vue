<template>
	<view class="root">
		<view 
			v-for="(item,index) in list" 
			:key="index"
			:style=item.style
			class="item">
			<text class="title">{{item.title}}</text>
			<text class="subtitle">{{item.subtitle}}</text>
			<view class="button" :style="{backgroundColor:item.color}">点击问诊</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list: [{
						style: {
							background:"url(https://api.hzxwhzxw.asia/static/treat_1.png)",
							backgroundRepeat: "no-repeat",   
							backgroundSize: "100% 100%",     
							color:"#2481E9"
						},
						title: "在线问诊",
						subtitle:"医生一对一问诊",
						color:"#2481E9"
					},
					{
						style: {
							background: "url(https://api.hzxwhzxw.asia/static/treat_2.png)",
							backgroundRepeat: "no-repeat",
							backgroundSize: "100% 100%", 
							color:"#0CE3B7"
						},
						title: "咨询问诊",
						subtitle:"专业用药咨询",
						color:"#0CE3B7"
					}
				],
			};
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	};
</script>

<style scoped lang="scss">
	.root {
		margin-top: 1vh;
		width: 90%;
		margin: 0 5vw;
		display: flex;
		justify-content: space-between;
	}
	.item{
		flex-shrink: 0;
		width:48%;
		border-radius: 8px;
		padding: 1vh 2vw;
	}
	.title,.subtitle
	{
		width:100%;
		display: block;
		margin-left: 2vw;
	}
	.title{
		font-size: 18px;
	}
	.button{
		color: white;
		margin-left: 2vw;
		border-radius: 8px;
		width:20vw;
		margin-top: 1.5vh;
		padding:1vh 4px;
		display: flex;
		justify-content: center;
	}
</style>
