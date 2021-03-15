import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAU1YAAfJurOa80QMEuf9unBtkIVGyRpZM",
  authDomain: "calendar-74362.firebaseapp.com",
  databaseURL: "https://calendar-74362-default-rtdb.firebaseio.com",
  projectId: "calendar-74362",
  storageBucket: "calendar-74362.appspot.com",
  messagingSenderId: "832615343968",
  appId: "1:832615343968:web:961543d793210e279a6005"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
