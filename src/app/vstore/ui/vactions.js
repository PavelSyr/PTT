import * as types from './mutation-types';

export const actions = {
    showTaskEditPopup(contex, payload) {
        contex.commit(types.SHOW_EDIT_TASK_POPUP, payload);
    },

    closeTaskEditPopup(contex) {
        contex.commit(types.CLOSE_EDIT_TASK_POPUP);
    },
    
    showTaskDeletePopup(contex, payload) {
        contex.commit(types.SHOW_DELETE_TASK_POPUP, payload);
    },
    
    closeTaskDeletePopup(contex) {
        contex.commit(types.CLOSE_DELETE_TASK_POPUP);
    },

    showDeleteAllTasksPopup(context, payload) {
        context.commit(types.SHOW_DELETE_ALL_TASKS_POPUP, payload);
    },

    closeDeleteAllTasksPopup(context) {
        context.commit(types.CLOSE_DELETE_ALL_TASKS_POPUP);
    },
}