import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1.安装插件
Vue.use(Vuex);

const state = {
    buildingValue: [],
    isTrue: false,
    commentsValue: [],
    formValue: [],
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});

// 3.导出
export default store