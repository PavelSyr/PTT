import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './app/App.vue';
import { store } from './app/vstore/store.js'; 

const vstore = createStore(store);
    
const app = createApp(App);

app.use(vstore);
app.mount('#app');