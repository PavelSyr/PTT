import * as types from './mutation-types';

export const actions = {
    createTask(contex) {
        contex.commit(types.CREATE_TASK);
    },

    updateTaskTitle(contex, payload) {
        contex.commit(types.UPDATE_TASK_TITLE, payload);
    },

    updateTaskAdditional(contex, payload) {
        contex.commit(types.UPDATE_TASK_ADDITIONAL, payload);
    },
    
    changeTaskState(contex, payload) {
        contex.commit(types.CHANGE_TASK_STATE, payload);
    },

    deleteTask(context, payload) {
        context.commit(types.DELETE_TASK, payload);
    },

    clearTasksData(contex) {
        contex.commit(types.CLEAR_TASKS_DATA);
    },
}