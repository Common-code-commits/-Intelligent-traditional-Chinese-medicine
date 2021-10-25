<template>
	<view>
		<image class="messages" src="../../src/messages.svg" >
		</image>
		<u-badge type="error" count="7" :is-center="true"></u-badge>
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
	}
	view,.messages
	{
		display: inline-block;
	}
	.messages
	{
		width: 24px;
		height: 24px;
	}
</style>
