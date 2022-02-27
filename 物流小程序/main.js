import App from './App'

//引入多语言
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
import languages from '@/common/lang'; //详见2
const i18n = new VueI18n({
	locale:  uni.getStorageSync('lang') ? uni.getStorageSync('lang') : 'cn', //现在配置的是中文
	 // getStorageSync 数据缓存
	messages: {
		'han': languages.han, //韩文
		'cn': languages.cn  //中文
	}
});
Vue.prototype._i18n = i18n;
//引入语言结束,再将语言put出来了。

// main.js，注意要在use方法之后执行
import uView from 'uview-ui'
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif