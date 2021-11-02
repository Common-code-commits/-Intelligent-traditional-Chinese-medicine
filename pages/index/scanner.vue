<template>
	<image class="scanner"
			src="http://api.hzxwhzxw.asia/static/scanner.svg"
			@click="click()"
			>
	</image>
</template>
<script>
	export default {
		data() {
			return {
				keyword: '',
			}
		},
		methods:{
			click:function()
			{
				uni.scanCode({
				    success: function (res) {
				    }
				})
			}
		},
		mounted:function(){
		},
	}
</script>
<style scoped lang="scss">
	.scanner{
		flex-shrink:0;
		display: inline-block;
		width: 28px;
		height: 28px;
	}
</style>
