<template>
	<view class="root">
		<p>热搜</p>
		<view class="item_box">
			<view class="item" v-for="(value,key) in list" :key="key">
				{{value.name}}
			</view>			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '待收货'
				}, {
					name: '待付款'
				}, {
					name: '待评价',
				}, {
					name: '待评价',
				}, {
					name: '待评价',
				}, {
					name: '待评价',
				}],
				current: 4,
				itemstyle:{
					"backgroundColor":"rgb(255,0,0)",
					"border-radius": "50%"
				},
				BarStyle:
				{
					"backgroundColor":"rgb(255,0,0)"					
				}
			}
		},
		methods: {
		},
		created: function() {
		}
	}
</script>
<style>
	.root
	{
		display: flex;
		width: 100%;
		align-items: center;
		text-align: center;
		justify-content: space-between;
		color: white;
	}
	p{
		flex-shrink: 0;		
	}
	.item_box
	{
		display: flex;
	}
	.item{
		flex-shrink: 0;
		background-color: rgba(0,0,0,0.3);
		color: white;
		border-radius: 999em;
		padding: 4px;
		margin-left: 2vw;
		padding: 4px 8px;
	}
</style>
