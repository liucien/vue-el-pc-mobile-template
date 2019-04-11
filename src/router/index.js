import router from './router';
import store from '@/store';
import {getToken, setToken, removeToken} from '@/utils/auth.js';

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      //动态路由
      // if (store.state.user.roles.length === 0) {
      //   store.dispatch('getUserInfo').then(user => {
      //     let finishRoutes = user.concat(companyRoutes,errorRoutes);
      //     router.addRoutes(finishRoutes);
      //     next({...to, replace: true})
      //   }).catch(err => {
      //     setToken('');
      //     next({
      //       name: 'login'
      //     })
      //   })
      // } else {
      //   next()
      // }
      next()
    }
  } else {
    if (to.path === '/login') {//如果是登录页面路径，就直接next()
      next();
    } else {//不然就跳转到登录；
      next('/login');
    }

  }
});

export default router;
