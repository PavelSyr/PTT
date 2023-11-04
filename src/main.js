import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import App from './app/App.vue';
import { store } from './app/vstore/store.js';
import { routes } from './app/routes/index.js';

const appRoutes = [
    ...routes
];

const router = createRouter({
    history: createWebHistory(),
    routes: appRoutes
});

const vstore = createStore(store);
    
const app = createApp(App);

app.use(vstore);
app.use(router);
app.mount('#app');