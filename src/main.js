import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar,Swipe, SwipeItem,Lazyload,Grid, GridItem,Card,Icon  } from 'vant';

Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Card);
Vue.use(Icon);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
