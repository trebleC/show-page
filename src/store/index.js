import { createStore } from 'vuex'

export default createStore({
  state() {
    return{
      name:0
    } 
  },
  getters: {
  },
  mutations: {
    setName(state, name) {
      state.name = name;
     }, 
  },
  actions: {
  },
  modules: {
  }
})
