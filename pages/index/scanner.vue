<template>
	<image class="scanner"
			src="../../src/scanner.svg"
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
<style>
	.scanner{
		display: inline-block;
		width: 28px;
		height: 28px;
	}
</style>
