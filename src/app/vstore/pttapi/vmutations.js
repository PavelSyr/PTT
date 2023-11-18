import * as types from './mutation-types';

export const mutations = {
    [types.SET_TOKEN] (state, token)
    {
        state.token = token;
    },
}