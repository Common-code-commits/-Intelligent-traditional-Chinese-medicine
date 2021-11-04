<template>
	<view class="promotion">
		<u-section class="more" title="分类查找" :font-size="32" style="height: 32px;"></u-section>
		<view class="list">
			<view class="column" v-for="(row, index) in Promotion" @tap="toPromotion(row)" :key="index"
				:style="{backgroundImage:'url(' + row.img +')' }">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 分类菜单
				Promotion: [],
			}
		},
		methods: {
			loadPromotion() {
				let cutTime = new Date();
				let yy = cutTime.getFullYear(),
					mm = cutTime.getMonth() + 1,
					dd = cutTime.getDate();
				let tmpcountdown = yy + '/' + mm + '/' + dd + ' 23:59:59';
				let tmpPromotion = [{
						title: '保健',
						img: 'http://api.hzxwhzxw.asia/static/滋补保健.png',
						countdown: false
					},
					{
						title: '药品抢购',
						ad: '每天23点上线',
						img: 'http://api.hzxwhzxw.asia/static/中西药品.png',
						countdown: tmpcountdown
					},
					{
						title: '保健',
						img: 'http://api.hzxwhzxw.asia/static/滋补保健.png',
						countdown: false
					},
					{
						title: '药品抢购',
						ad: '每天23点上线',
						img: 'http://api.hzxwhzxw.asia/static/中西药品.png',
						countdown: tmpcountdown
					},
					{
						title: '保健',
						img: 'http://api.hzxwhzxw.asia/static/滋补保健.png',
						countdown: false
					},
					{
						title: '药品抢购',
						ad: '每天23点上线',
						img: 'http://api.hzxwhzxw.asia/static/中西药品.png',
						countdown: tmpcountdown
					} //countdown为目标时间，程序会获取当前时间倒数
				]
				this.Promotion = tmpPromotion;
			}
		},
		created: function() {
			this.loadPromotion()
		}
	}
</script>

<style lang="scss" scoped>
	.promotion {
		width: 88vw;
		margin: 0 6vw;

		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin: 2vh 0;
			overflow-x: scroll;

			.column {
				flex-shrink: 0;
				width: 43%;
				margin: 15upx 3%;
				border-radius: 10upx;
				overflow: hidden;
				background-size: 100% 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.top {
					width: 100%;
					height: 40upx;
					display: flex;
					align-items: center;
					margin-bottom: 5upx;

					.title {
						font-size: 30upx;
					}

					.countdown {
						margin-left: 20upx;
						display: flex;
						height: 40upx;
						display: flex;
						align-items: center;
						font-size: 20upx;

						view {
							height: 30upx;
							background-color: #f06c7a;
							display: flex;
							justify-content: center;
							align-items: center;
							color: #fff;
							border-radius: 4upx;
							margin: 0 4upx;
							padding: 0 2upx;
						}
					}
				}

				.left {
					width: 50%;
					height: 18.86vw;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.ad {
						margin-top: 5upx;
						width: 100%;
						font-size: 22upx;
						color: #acb0b0;
					}

					.into {
						width: 100%;
						font-size: 24upx;
						color: #aaa;
						margin-bottom: 5upx;
					}
				}
			}
		}
	}
</style>
