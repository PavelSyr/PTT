import { state } from './vstate';
import { mutations } from './vmutations.js';
import { actions } from './vactions.js';
import { getters } from './vgetters.js';

const uiModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default uiModule;