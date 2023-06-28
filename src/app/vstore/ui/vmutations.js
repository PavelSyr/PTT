export const mutations = {
    SHOW_EDIT_TASK_POPUP(state, payload) {
        state.popups.editTaskPopup.taskData = payload;
        state.popups.editTaskPopup.isActive = true;
    },

    CLOSE_EDIT_TASK_POPUP(state) {
        state.popups.editTaskPopup.isActive = false;
        state.popups.editTaskPopup.taskData = undefined;
    },

    SHOW_DELETE_TASK_POPUP(state, payload) {
        state.popups.deleteTaskPopup.taskData = payload;
        state.popups.deleteTaskPopup.isActive = true;
    },

    CLOSE_DELETE_TASK_POPUP(state) {
        state.popups.deleteTaskPopup.isActive = false;
        state.popups.deleteTaskPopup.taskData = undefined;
    },

    SHOW_DELETE_ALL_TASKS_POPUP(state, payload) {
        state.popups.deleteAllTasksPopup.tasksData = payload;
        state.popups.deleteAllTasksPopup.isActive = true;
    },

    CLOSE_DELETE_ALL_TASKS_POPUP(state) {
        state.popups.deleteAllTasksPopup.isActive = false;
        state.popups.deleteAllTasksPopup.tasksData = undefined;
    },
}