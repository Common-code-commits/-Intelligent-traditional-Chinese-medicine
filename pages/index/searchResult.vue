<template>
	<view>
		<u-navbar :background="background" :border-bottom="false" :title-color="color" :title-size="40" title="搜索结果" :height="50"
			:back-icon-color="color">
		</u-navbar>
		<view class="content">
			<view class="top">
				<text class="message">
					已为您查询到{{num}}条结果
				</text>
				<image src='http://docfile.funkingka.cn/FqzmiFqvXbHg-cfbquNRlawHUgHt' mode='scaleToFill'
					class='gif-wave'></image>
			</view>
			<view>
				<view class="card" v-for="(item,index) in list" :key="index">
					<image src="https://api.hzxwhzxw.asia/static/med.png"></image>
					<view class="main">
						<text class="maintitle">{{item.med}}</text>
						<text class="maincontent">{{item.element}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				keywords: "Test",
				background: {
					backgroundColor: "#44E8A8",
				},
				color: "#FFFFFF",
				num: 0
			}
		},
		methods: {
			getdata: function() {
				if (this.$store.state.keyword != undefined && this.$store.state.keyword != "A") {
					console.log(this.$store.state.keyword)
					var word = this.$store.state.keyword
				} else {
					this.$store.commit('getkeyword')
					console.log(this.$store.state.keyword)
					var word = this.$store.state.keyword
				}
				var that = this
				try {
					uni.request({
						url: 'https://api.hzxwhzxw.asia/searchmed',
						data: {
							keyword: word
						},
						success: (res) => {
							if (res.statusCode == 200) {
								that.list = res.data.values.map(
									(str) => {
										str.element = str.element.replace(/ /g, "")
										str.element = str.element.replace(/\)/g, ")，")
										return str
									}
								)
								that.num = that.list.length
							}
						},
						fail: (res) => {
							console.log('get失败')
							that.$store.searchResult = []
						}
					})
				} catch (error) {
					console.log("发生错误了")
					this.$store.searchResult = []
				}
			},
		},
		onLoad: function() {
			this.getdata()
		}
	}
</script>
<style lang="scss" scoped>
	.card {
		position: relative;
		width: 80vw;
		margin: 4vh auto;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-around;
		border-radius: 16px;
		background-color: white;
		box-shadow: 50px 50px 50px rgba(121, 121, 121, 0.1);
	}

	.card {
		top:-20vh;
		z-index: 99;
	}

	image {
		width: 100%;
		height: 20vw;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
	}

	.titlebox {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		align-content: space-between;
	}

	.main {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.maintitle::before {
		content: "";
		width: 3px;
		height: 18px;
		background-color: red;
		display: inline-block;
		margin-right: 4vw;
	}

	.maintitle {
		font-size: 18px;
		flex-shrink: 0;
		display: flex;
		padding: 2vh 2vw;
		align-items: center;
		display: inline-flex;
		flex-shrink: 0;
		width: 100%;
		font-weight: bold;
	}

	.maincontent {
		word-wrap: break-word;
		color: #000000;
		padding: 0 2vw;
		padding-bottom: 2vh;
		color: rgb(121, 121, 121);
		letter-spacing: 2px;
		font-size: 14px;
		text-indent: 28px;
		line-height: 20px;
	}

	.message {
		width: 100%;
		color: white;
		background-color: #44E8A8;
		display: inline-block;
		margin-left: 10vw;
		margin-top: 4vh;
		font-size: 22px;
	}

	.top {
		position: relative;
		width: 100%;
		height: 30vh;
		background-color: $app_green;
	}

	.gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 10vh;
	}
</style>
