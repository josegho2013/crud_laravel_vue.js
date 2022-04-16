// require("./bootstrap");
// import vue from "vue";
// window.Vue = vue;

// import App from "./components/App.vue";

// //importamos Axios
// import VueAxios from "vue-axios";
// import axios from "axios";

// //Importamos y configuramos el Vue-router
// import VueRouter from "vue-router";
// import { routes } from "./routes";

// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);

// const router = new VueRouter({
//     mode: "history",
//     routes: routes,
// });

// //finalmente, definimos nuestra app de Vue
// const app = new Vue({
//     el: "#app",
//     router: router,
//     render: (h) => h(App),
// });



require("./bootstrap");
import { createApp } from 'vue'
import * as VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from 'axios'
import { routes } from "./routes";
import App from "./components/App.vue";

const router = new VueRouter({
    mode: "history",
    routes: routes,
});

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')

//finalmente, definimos nuestra app de Vue
// const app = new Vue({
//     el: "#app",
//     router: router,
//     render: (h) => h(App),
// });