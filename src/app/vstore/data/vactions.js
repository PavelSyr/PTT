export const actions = {
    createTask(contex) {
        contex.commit('CREATE_TASK');
    },

    updateTaskTitle(contex, payload) {
        contex.commit('UPDATE_TASK_TITLE', payload);
    },

    updateTaskAdditional(contex, payload) {
        contex.commit('UPDATE_TASK_ADDITIONAL', payload);
    },
    
    changeTaskState(contex, payload) {
        contex.commit('CHANGE_TASK_STATE', payload);
    },

    deleteTask(context, payload) {
        context.commit('DELETE_TASK', payload);
    },

    clearTasksData(contex) {
        contex.commit('CLEAR_TASKS_DATA');
    },
}