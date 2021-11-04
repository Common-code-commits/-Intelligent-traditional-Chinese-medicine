import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		keyword: "A",
	},
	mutations: {
		// 登录
		setkeyword(state, res) {
			console.log(res)
			if (res!=undefined)
				uni.setStorageSync('keyword',res)
		},
		getkeyword(state){
			let data = uni.getStorageSync('keyword')
			if(data!=undefined)
				state.keyword = data
		}
	}
})
export default store
