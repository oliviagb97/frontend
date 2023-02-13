import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from "./App.vue";
import router from "./router";
import "bootstrap"

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css"

const app = Vue.createApp(App);
app.use(VueAxios, axios);
app.use(router);

app.mount("#app");
