export const actions = {
    showTaskEditPopup(contex, payload) {
        contex.commit('SHOW_EDIT_TASK_POPUP', payload);
    },

    closeTaskEditPopup(contex) {
        contex.commit('CLOSE_EDIT_TASK_POPUP');
    },
    
    showTaskDeletePopup(contex, payload) {
        contex.commit('SHOW_DELETE_TASK_POPUP', payload);
    },
    
    closeTaskDeletePopup(contex) {
        contex.commit('CLOSE_DELETE_TASK_POPUP');
    },

    showDeleteAllTasksPopup(context, payload) {
        context.commit('SHOW_DELETE_ALL_TASKS_POPUP', payload);
    },

    closeDeleteAllTasksPopup(context) {
        context.commit('CLOSE_DELETE_ALL_TASKS_POPUP');
    },
}