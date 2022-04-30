import { API_URL } from '@/http';
import AuthService from '@/Service/AuthService';
import axios from 'axios';

export default {
  state: {
    user: {},// масив с пользователем
    isAuth: false// авторизован пользователь или нет
  },
  getters: {
    get_user: (s)=>{return s}
  },
  mutations: {
    setAuth(state, bool) {
      try {
        // console.log("mutation")
          state.isAuth = bool;
      }
      catch(e) {
          
      }
    },
    setUser(state, user) {
      try {
        state.user = user;
      }
      catch(e) {
          
      }
    },


  },
  actions: {
    async login({commit},{email, password}) {
      try {
 
          const response = await AuthService.login(email, password);
          // console.log("response.data.user ",response)
          // если всё ок то в response прийдут токены
          localStorage.setItem('token',response.data.accessToken);
          commit('setAuth', true);
          commit('setUser', response.data.user);
          
      }
      catch(e) {
          console.log(e.response.data.message)
      }
    },
    async registration({commit},{email, password}) {
      try {
          const response = await AuthService.registration(email, password);
     
          // если всё ок то в response прийдут токены
          localStorage.setItem('token',response.data.accessToken);
          commit('setAuth', true);
          commit('setUser', response.data.user);
      }
      catch(e) {
          console.log(e.response.data.message)
      }
    },
    async logout({commit}) {
      try {
          const response = await AuthService.logout();
          // если всё ок то в response прийдут токены
          localStorage.removeItem('token');
          commit('setAuth', false);
          commit('setUser', {});

      }
      catch(e) {
          console.log(e.response.data.message)
      }
    },
    async chechAuth({commit}) {
      try {
        let token = localStorage.getItem('token')|| null;
        if(!token) { // если не авторизован
          return 
        }
        //withCredentials для кук
        const response = await axios.get(`${API_URL}/refresh`,{withCredentials: true});
        localStorage.setItem('token',response.data.accessToken);
        commit('setAuth', true);
        commit('setUser', response.data.user);
      } catch (e) {
        console.log(e.response.data.message)
      }
    },

  }
}
