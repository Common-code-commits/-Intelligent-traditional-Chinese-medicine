<template>
	<view class="root">
		<u-notice-bar class="item"
					  mode="vertical" 
					  :list="list"
					  :volume-icon="false"
					  ></u-notice-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'寒雨连江夜入吴',
				]
			}
		}
	}
</script>
<style scoped>
	.root{
		height:24px;
		width: 100%;
		overflow-y:hidden;
	}
	.item{
		flex-shrink:0;
	}
</style>