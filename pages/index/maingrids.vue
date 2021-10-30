<template>
	<view class="root">
		<u-grid :col="4" @click="click" :border="false" >
			<u-grid-item :bg-color="bgcolor" :custom-style="activity_cell" v-for="(item, index) in mainList" :index="index" :key="index">
				<view class="activity" :style="{background: colors[index]}">		
				</view>
				{{item}}
			</u-grid-item>
		</u-grid>
		<u-grid :col="4" @click="click" :border="false">
			<u-grid-item :bg-color="bgcolor" :custom-style="activity_cell" v-for="(item, index) in subList" :index="index" :key="index">
				<view 
					class="activity" 
					:style="{background: colors[index]}">	
				</view>
				{{item}}
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				mainList: ['附近门店', '领券中心', '防疫用品', '活动中心'],
				subList:['感冒用药','医疗器械','儿科用药','更多分类'],
				colors:['#4EF1B6','#F85E49','#47B3F9','#FF9A33'],
				activity_cell:{
					padding:"1vh 0",
					backgroundColor:"rgba(0,0,0,0)"
				},
				bgcolor:"rgba(0,0,0,0)"
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
	.root{
		background-color: rgba(0,0,0,0);
	}
	.activity
	{
		width:56%;
		height: 13vw;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1vh;
		box-shadow: 0px 4px 0px rgba(0,0,0,0.1);
		color:rgb(121,121,121);
	}
	.swiper {
	}

</style>
