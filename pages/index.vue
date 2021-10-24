<template>
	<Header class="content_top" >
	</Header>
</template>
<script>
	import Header from "./components/header.vue"
	export default {
		data() {
			return {
				keyword: '',
			}
		},
		components: {
			Header
		},
		methods:{
		},
		mounted:function(){
		},
	}
</script>

<style lang="scss" scoped>
	.content_top {
		height:30vh;
		background-color: $app_green;
		padding-left:6vw;
		padding-right:6vw;
	}
</style>
