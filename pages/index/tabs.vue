<template>
		<view class="root">
			<view class="title">热搜</view>
			<view class="item_box">
				<view @click="change(item)"
					  class="item" 
					  v-for="(item, index) in list" 
					  :index="index" 
					  :key="index">
					{{item}}
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list: ['三九感冒灵', '阿莫西林','健胃消食片', '莲花清瘟胶囊'],
			};
		},
		methods: {
			change(item) {
				console.log(item)
			}
		}
	};
</script>

<style scoped lang="scss">
	/* 下方这些scss变量为uView内置变量，详见开发  组件-指南-内置样式 */
	
	.root{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.title
	{
		flex-shrink: 0;
		width: 38px;
		color: white;
		font-size: 16px;
	}
	.item_box{
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow-x: scroll;
	}
	.item{
		flex-shrink: 0;
		padding: 2px 8px;
		margin: 0px 1vw;
		border-radius: 8px;
		background-color: rgba(0,0,0,0.08);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}
</style>