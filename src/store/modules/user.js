import {getToken, setToken, removeToken} from '@/utils/auth.js';
import {login} from '@/api/user.js';

export default {
  state: {
    token: getToken(),
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    goLogin({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          commit('SET_TOKEN', response.token);
          setToken(response.token);
          resolve(response.token);
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
