import { API_URL } from '@/http';
import AuthService from '@/Service/AuthService';
import UserService from '@/Service/UserService';
import axios from 'axios';

export default {
  state: {
    users: {},// масив с пользователем
  },
  mutations: {
    setUserList(state, user) {
      try {
        state.users = user;
      }
      catch(e) {
          
      }
    },
  },
  actions: {
    async get_users({commit}) {
      try {
        //withCredentials для кук
        const response = await UserService.fetchUsers();
        // console.log("response.data.user ",response)

    
        commit('setUserList', response.data);
      } catch (e) {
        console.log(e.response.data.message)
      }
    }
  },
  getters: {
    get_users: (s)=>s.users
  },
}
