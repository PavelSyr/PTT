<template>
    <div id="popupsContainer" class="is-fullheight">
        <edit-task-popup 
            v-if="isEditTaskPopupActive"
            :taskData="editTaskPopupData"
            @close="onEditTaskPopupClose"
            @submit="onEditTaskPopupSubmit"
        ></edit-task-popup>
        <delete-task-popup
            v-if="isDeleteTaskPopupActive"
            :taskData="deleteTaskPopupData"
            @close="onDeleteTaskPopupClose"
            @submit="onDeleteTaskPopupSubmit"
        ></delete-task-popup>
        <delete-all-tasks-popup
            v-if="isDeleteAllTasksPopupActive"
            :tasksData="deleteAllTasksPopupData"
            @close="onDeleteAllTasksPopupClose"
            @submit="onDeleteAllTasksPopupSubmit"
        ></delete-all-tasks-popup>
    </div>
</template>

<script lang="js">
import EditTaskPopup from './popups/EditTaskPopup.vue';
import DeleteTaskPopup from './popups/DeleteTaskPopup.vue';
import DeleteAllTasksPopup from './popups/DeleteAllTasksPopup.vue';

export default {
    name: "popupsContainer",

    components: {
        "edit-task-popup": EditTaskPopup,
        "delete-task-popup": DeleteTaskPopup,
        "delete-all-tasks-popup" : DeleteAllTasksPopup,
    },

    props: {
        popups: {
            type: Object,
            required: true,
        },
    },

    computed: {
        isEditTaskPopupActive() {
            return this.popups.editTaskPopup.isActive;
        },

        editTaskPopupData() {
            return this.popups.editTaskPopup.taskData;
        },

        isDeleteTaskPopupActive() {
            return this.popups.deleteTaskPopup.isActive;
        },

        deleteTaskPopupData() {
            return this.popups.deleteTaskPopup.taskData;
        },

        isDeleteAllTasksPopupActive() {
            return this.popups.deleteAllTasksPopup.isActive;
        },

        deleteAllTasksPopupData() {
            return this.popups.deleteAllTasksPopup.tasksData;
        }
    },

    methods: {
        onEditTaskPopupClose() {
            this.$emit("edit-task-popup-close");
        },

        onEditTaskPopupSubmit(eventArgs) {
            this.$emit("edit-task-popup-submit", eventArgs);
        },

        onDeleteTaskPopupClose() {
            this.$emit("delete-task-popup-close");
        },

        onDeleteTaskPopupSubmit(eventArgs) {
            this.$emit("delete-task-popup-submit", eventArgs);
        },

        onDeleteAllTasksPopupClose() {
            this.$emit("delete-all-tasks-popup-close");
        },

        onDeleteAllTasksPopupSubmit() {
            this.$emit("delete-all-tasks-popup-submit");
        },
    }
}
</script>