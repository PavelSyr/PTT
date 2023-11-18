import { pttapi } from '../../services/pttapi.js'
import * as types from './mutation-types.js';

export const actions = {
    login(contex, payload) {
        return pttapi.login(payload.username).then((response) => {
            localStorage.setItem("token", response.data.token);
            contex.commit(types.SET_TOKEN, response.data.token);
        })
    },

    logout(contex) {
        return new Promise((resolve) => {
            localStorage.removeItem("token");
            contex.commit(types.SET_TOKEN, null);
            resolve();
        });
    }
};