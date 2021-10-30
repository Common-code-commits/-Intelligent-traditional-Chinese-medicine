<template>
	<view>
		<image class="messages" src="http://api.hzxwhzxw.asia/static/messages.svg" >
		</image>
		<u-badge  size="mini" type="error" count="7" :is-center="true"></u-badge>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				keyword: '',
			}
		},
		methods:{
		},
		mounted:function(){
		},
	}
</script>
<style>
	view{
		position: relative;
		display: flex;
		align-items: center;
	}
	.messages
	{
		width: 24px;
		height: 24px;
	}
</style>
