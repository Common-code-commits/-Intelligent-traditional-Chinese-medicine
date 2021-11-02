import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        testArr:['123','456','789'],
        count:0,
    },
    mutations: {
        setCountInc(state,num){
            state.count = num;
        },
        setTestArrInc(state,arr){
            state.testArr = arr;
        }
    },
    actions: {

    },
    getters:{
        count(state,getters){
            return state.count
        },
        testArr(state,getters){
            return state.testArr
        },
    }
})
export default store