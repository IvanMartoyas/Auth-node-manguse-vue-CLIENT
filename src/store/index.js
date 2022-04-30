import { API_URL } from '@/http';
import AuthService from '@/Service/AuthService';
import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import users  from './_users';
import auth  from './_auth';// модуль авторизации

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
   
  },
  getters: {
   
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    users,
    auth
  }
})
