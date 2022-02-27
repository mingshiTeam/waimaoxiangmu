const fu = {};
fu.direct = function(id) {
	if (getApp().globalData.language == id) {
		getApp().globalData.language = id
	} else {
		getApp().globalData.language = id
	}
}
fu.setStorage = function(key, value) {
	uni.setStorage({
		key: key,
		data: value,
		success: function() {
			console.log('存储成功');
		}
	});
}
fu.getStorage = function(key, value) {
	uni.getStorage({
		key: key,
		success: function(res) {
			console.log(res.data);
			return res
		}
	});
}

export default {
	fu
}
