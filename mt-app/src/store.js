import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: {},
  // 存储登录姓名
  userName: '2333'
}

const mutations = {
  setPosition (state, val) {
    state.position = val
  },
  // 登录姓名
  setUserName (state, val) {
    state.userName = val
  }
}

const actions = {
  setPosition ({state, commit}, val) {
  // 异步请求后端获取当前位置数据
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
