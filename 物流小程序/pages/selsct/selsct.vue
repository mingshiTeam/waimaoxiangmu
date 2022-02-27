<template>
	<view>
		<view class="_select">
			{{$t("selsct.title")}}
		</view>
		<view class="_image1"  @click="goindex(1)">
			<view class="_title">
				{{$t("selsct.zh")}}
			</view>
			<image src="../../static/images/zhonghan.png" style="margin: 0 auto;width: 100%" mode="aspectFit"></image>
		</view>
		<view class="_image1"  @click="goindex(2)">
			<view class="_title">
				{{$t("selsct.han")}}
			</view>
			<image src="../../static/images/hanzhong.png" style="margin: 0 auto;width: 100%" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {

			}
		},
		methods: {
			goindex:function(id){
				//切换语言
				if(id==2){
					common.fu.setStorage("lang","han")
				}else{
					common.fu.setStorage("lang","cn")
				}
				//放到全局变量能节省手机运行时间，不过可以直接放到缓存，能够长期使用。
				common.fu.direct(id)//存储到运行中心
				common.fu.setStorage("direction",id)//存储到缓存中心
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style>
	._select {
		font-size: 24px;
		font-family: .PingFang SC;
		font-weight: 400;
		color: #333333;
		padding-left: 25px;
		line-height: 100px;
	}

	._image1 {
		margin: 0px 54rpx;
		position: relative;
		border: 2rpx solid #D7D7D7;
		border-radius: 20px;
		margin-top: 54rpx;
	}

	._image1 image {
		height: 204rpx;
	}
	._title{
		position: absolute;
		width: 90%;
		height: 100%;
		line-height: 204rpx;
		text-align: center;
	}
</style>
