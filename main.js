//IONIC
//import { IonicVue } from '@ionic/vue';
//import { createApp } from 'vue'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

//CSS IONIC

/* Core CSS required for Ionic components to work properly
import '@ionic/vue/css/core.css';

 Basic CSS for apps built with Ionic
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

 Optional CSS utils that can be commented out
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
*/
//hasta aca ionic

Vue.config.productionTip = false

//Ionic aca
/*const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});*/
//Hasta aca ionic

//To use Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCLCDbsM9tu0XHDVtjjOgdL8iYHpNqiCl4'
  },
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
