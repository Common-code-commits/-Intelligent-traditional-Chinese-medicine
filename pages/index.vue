<template>
	<view class="content">
		<view class="search_box">
			<u-search placeholder="桂枝汤" 
					  v-model="keyword" 
					  :show-action="false">
			</u-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: ''
			}
		}
	}
</script>

<style lang="scss" >
	.content {
		height:30vh;
		background-color: $app_green;
	}
	.search_box{
		width: 100%;
		padding: 0 5vw;
		// background-color: red;
	}
</style>
