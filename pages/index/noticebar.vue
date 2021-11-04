<template>
	<view class="root">
		<image class="title" src="https://api.hzxwhzxw.asia/static/health.svg"></image>
		<view class="item">
			<u-notice-bar
				mode="vertical" 
				:list="list"
				:volume-icon="false"
				:bgColor="bgcolor"
				:color="color"
				:font-size="size"
				:padding="padding"
			></u-notice-bar>			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				],
				bgcolor:"rgba(0,0,0,0)",
				color:"rgb(0,0,0)",
				size:"28",
				padding:"0px 1vw"
			}
		},
		mounted:function(){
			let width = uni.getSystemInfoSync().screenWidth
			this.size = parseInt( 16 / (width/750)) 
		}
	}
</script>
<style scoped lang="scss">
	.root{
		display: flex;
		align-items: center;
		width: 90vw;
		margin-top: 1vh;
		border-radius: 20px;
		background-color: white;
		margin: 2vh 5vw;
		padding: 2vh 1vw;
		box-shadow: 2px 2px 2px #888888;
	}
	.title{
		flex-shrink: 0;
		width:72px;
		height: 18px;
		padding: 0px 3vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.title::after{
	    content:"";
	    width:1px;
	    height:80px;
		position: relative;
		left:2.5vw;
	    background:rgba(121,121,121,0.2);
	}
	.item{
		position: relative;
		width:100%;
		height: 18px;
		border-radius: 20px;
		padding: 0;
		background-color: rgba(0,0,0,0);
	}
</style>