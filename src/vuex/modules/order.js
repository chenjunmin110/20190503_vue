const state = {
  ordermag: 0
}
const mutations = {
  ORDERMAG (state, param) {
    state.ordermag = param
  }
}
const actions = {
  ordermag (context, param) {
    context.commit('ORDERMAG', param)
  }
}
const getters = {
  // Getter 还也可以接收 getters 作为第二个参数
  dateLength (state) {
    return getters.ordermag + 1
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
