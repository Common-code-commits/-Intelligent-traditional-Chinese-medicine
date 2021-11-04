<template>
	<view class="root">
		<u-grid :col="4" @click="click" :border="false" >
			<u-grid-item :bg-color="bgcolor" :custom-style="activity_cell" v-for="(item, index) in mainList"
				:index="index" :key="index">
				<view class="activity shadow" :style="{background: item.color}">
					<image class="icon" :src="item.imgurl"></image>
				</view>
				{{item.title}}
			</u-grid-item>
		</u-grid>
		<u-grid :col="4" @click="click" :border="false">
			<u-grid-item :bg-color="bgcolor" :custom-style="activity_cell" v-for="(item, index) in subList"
				:index="index" :key="index">
				<view class="activity">
					<image class="bigicon" :src="item.imgurl"></image>
				</view>
				{{item.title}}
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				mainList:[],
				subList:[],
				activity_cell: {
					padding: "1vh 0",
					backgroundColor: "rgba(0,0,0,0)"
				},
				bgcolor: "rgba(0,0,0,0)"
			}
		},
		methods: {
			change(e) {
				console.log("test")
			},
			click(e) {
				console.log("test")
			},
			getData() {
				var that = this
				uni.request({
						url: 'https://api.hzxwhzxw.asia/mainList',
						success: (res) => {
							if(res.statusCode==200)
								that.mainList = res.data
						},
						fail: (res) => {
							console.log('get失败');
						}
					}),
				uni.request({
					url: 'https://api.hzxwhzxw.asia/subList',
					success: (res) => {
						if(res.statusCode==200)
							that.subList = res.data
					},
					fail: (res) => {
						console.log('get失败')
					}
				})
			}
		},
		mounted:function()
		{
			this.getData()
		}
	}
</script>

<style scoped lang="scss">
	.root {
		background-color: rgba(0, 0, 0, 0);
	}

	.shadow {
		box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
	}

	.activity {
		width: 56%;
		height: 13vw;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1vh;
		color: rgb(121, 121, 121);
	}

	.icon {
		width: 8vw;
		height: 8vw;
	}

	.bigicon {
		width: 10vw;
		height: 10vw;
	}
</style>
