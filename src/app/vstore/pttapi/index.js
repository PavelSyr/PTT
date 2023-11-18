import { state } from './vstate';
import { mutations } from './vmutations.js';
import { actions } from './vactions.js';
import { getters } from './vgetters.js';

const pttapiModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default pttapiModule;