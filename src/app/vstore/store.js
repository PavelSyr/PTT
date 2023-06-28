import dataModule from './data/index.js';
import uiModule from './ui/index.js';

export const store = {
    modules: {
        data: dataModule,
        ui: uiModule,
    }
}