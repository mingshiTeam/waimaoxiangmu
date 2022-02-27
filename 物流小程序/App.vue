<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			"language": 'zh',//语言一共有两个，一个是韩语一个是中文。
			"direction":"zhtohan"//方向一共有两个中国到韩国，另外一个是韩国到中国。
		}
	}
</script>

<style lang="scss">
@import "uview-ui/index.scss";
</style>