<template>
	<view class="root">
		<image class="scanner" src="http://api.hzxwhzxw.asia/static/scanner.svg" @click="click()">
		</image>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				keyword: '',
			}
		},
		methods: {
			click: function() {
				uni.scanCode({
					success: function(res) {}
				})
			}
		},
		mounted: function() {},
	}
</script>
<style scoped lang="scss">
	.root,.scanner {
		width: 28px;
		height: 28px;
	}
	.scanner{
		flex-shrink: 0;
		display: inline-block;
	}
</style>
