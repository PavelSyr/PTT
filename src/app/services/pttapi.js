const axios = require('axios');

const instance = axios.create({
    baseURL: '/api', 
});

const endpoints = {
    /**
     * @param {string} username
     */
    LOGIN: 'login'
}

export const pttapi = {
    /**
    * @param {string} username 
    */
    login (username) {
        return instance.get(endpoints.LOGIN, {
            params: {
                username: username
            }
        })
    },
};