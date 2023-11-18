import dataModule from './data/index.js';
import pttapiModule from './pttapi/index.js';

export const store = {
    modules: {
        data: dataModule,
        pttapi: pttapiModule,
    }
}