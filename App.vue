<script>
	export default {
        onLaunch: function() {
        },
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	@font-face {
		font-family: 'webfont';
		font-display: swap;
		src: url('//at.alicdn.com/t/webfont_p5jy8c03nda.eot');
		/* IE9*/
		src: url('//at.alicdn.com/t/webfont_p5jy8c03nda.eot?#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('//at.alicdn.com/t/webfont_p5jy8c03nda.woff2') format('woff2'),
			url('//at.alicdn.com/t/webfont_p5jy8c03nda.woff') format('woff'),
			/* chrome、firefox */
			url('//at.alicdn.com/t/webfont_p5jy8c03nda.ttf') format('truetype'),
			/* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
			url('//at.alicdn.com/t/webfont_p5jy8c03nda.svg#Alibaba-PuHuiTi-Regular') format('svg');
		/* iOS 4.1- */
	}

	page {
		font-family: webfont;
		background-color: #F8F8F8;
	}

	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
</style>
