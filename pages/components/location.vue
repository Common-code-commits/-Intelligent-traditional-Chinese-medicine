<template>
	<div class="location_box">
		<p>{{text}}</p>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				text:"北京市"
			}
		}
	}
</script>
<style lang="scss">
	.location_box:before{
		    content: '';
		    display: inline-block;
		    width: 24px;
		    height: 24px;
		    background-image: url("https://obohe.com/i/2021/10/20/h6qpf5.svg");
			background-size:100% 100%;
	}
	.location_box{
		color: white;
		font-size: 16px;
		dispLay :flex;
		align-items: center;
		text-align: center;
	}
	.location_box:after{
		    content: '';
		    display: inline-block;
		    width: 6px;
		    height: 6px;
		    background-image: url("https://obohe.com/i/2021/10/22/xw0r8u.svg");
			background-size:100% 100%;
	}
	p{
		padding-left:6px;
		padding-right: 10px;
		height: 24px;
	}
</style>
