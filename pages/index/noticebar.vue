<template>
	<view class="root">
		<view class="title">健康头条</view>
		<view class="item">
			<u-notice-bar
				mode="vertical" 
				:list="list"
				:volume-icon="false"
				:bgColor="bgcolor"
			></u-notice-bar>			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				],
				bgcolor:"rgba(0,0,0,0)"
			}
		}
	}
</script>
<style scoped lang="scss">
	.root{
		display: flex;
		align-items: center;
		width: 100%;
		margin-top: 1vh;
		border-radius: 20px;
	}
	.title{
		flex-shrink: 0;
		padding: 0 3vw;
	}
	.item{
		width: 100%;
		border-radius: 20px;
	}
</style>