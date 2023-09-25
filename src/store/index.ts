import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employeeList: [] as Array<object>,
    employee: {} as object
  },
  getters: {
  },
  mutations: {
    setEmployee(state,data){
      state.employeeList.push(data)
    },
    viewEmployee(state,data:object){
      state.employee = data
    },
    updateEmployee(state,data){
      state.employeeList[data.id]=data
    },
    deleteEmployee(state,data){
      state.employeeList.splice(data.id,1)
    },
  },
  actions: {
    
  },
  modules: {
  }
})
