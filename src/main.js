import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyD5Yl7ceVaQIXQFk2Mi84kCYup1_-2yH6I",
  authDomain: "maza-fece2.firebaseapp.com",
  databaseURL: "https://maza-fece2.firebaseio.com",
  projectId: "maza-fece2",
  storageBucket: "maza-fece2.appspot.com",
  messagingSenderId: "740842094947",
  appId: "1:740842094947:web:d163e6d84c23047060d356",
  measurementId: "G-6CZXGM4RZW"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
