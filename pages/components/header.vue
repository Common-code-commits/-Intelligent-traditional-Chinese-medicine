<template>
	<view :style="{paddingTop: statusBarHeight + 'px'}">
		<view class="top" >
			<view>
				<location></location>
			</view>
			<view>
				<scanner></scanner>
				<messages></messages>
			</view>
		</view>
		<view class="search_box">
			<u-search placeholder="桂枝汤" 
					  v-model="keyword" 
					  :show-action="false">
			</u-search>
		</view>
	</view>
</template>

<script>
	import location from "./location.vue"
	import scanner from "./scanner.vue"
	import messages from "./messages.vue"
	export default {
		data() {
			return {
				keyword:"",
				statusBarHeight:0,
			}
		},
		components:{
			location,
			scanner,
			messages
		},
		methods:{
			setheader:function()
			{
				this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			}
		},
		created:function(){
			this.setheader()
		}
	}	
</script>
<style 	lang="scss" >
	.search_box,.top{
		width: 100%;
	}
	.top
	{
		padding-top: 2vh;
		padding-bottom: 2vh;
		display: flex;
		justify-content: space-between;
	}
</style>
