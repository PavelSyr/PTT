<template>
    <div id="app" class="container">
        <section class="hero is-link is-small">
            <div class="hero-body">
                <p class="title">PTT</p>
                <p class="subtitle">Let's track...</p>
                <header-summary
                    :totalTime="getTotalTime"
                    @clear-all="onClearAllTasks"
                ></header-summary>
            </div>
        </section>
        <div id="app-tasks-rows">
            <task-entry v-for="(t, index) in getTasks"
                @delete="onTaskDelete"
                @edit="onTaskEdit"
                @stateChanged="onTaskStateChanged" 
                :key="t.id" 
                :taskData="t" 
                :index="index"
            ></task-entry>
        </div>
        <footer>
            <div class="columns">
                <div class="column"></div>
                <div class="column is-1">
                    <button class="button is-success is-circular" @click="onAddTask">
                        <span class="icon">
                            <i class="fa fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
        </footer>
        <popups-container 
            :popups="getPopups" 
            @edit-task-popup-close="onEditTaskPopupClose"
            @edit-task-popup-submit="onEditTaskPopupSubmit"
            @delete-task-popup-close="onDeleteTaskPopupClose"
            @delete-task-popup-submit="onDeleteTaskPopupSubmit"
            @delete-all-tasks-popup-close="onDeleteAllTasksPopupClose"
            @delete-all-tasks-popup-submit="onDeleteAllTasksPopupSubmit"
        ></popups-container>
    </div>
</template>

<script lang="js">
import TaskEntry from './components/TaskEntry.vue';
import PopupsContainer from './components/PopupsContainer.vue'
import HeaderSummary from './components/HeaderSummary.vue';
import { mapGetters } from 'vuex';

export default {
    name: "PTT",

    components: {
        'task-entry': TaskEntry,
        'popups-container': PopupsContainer,
        'header-summary': HeaderSummary,
    },

    computed: {
        ...mapGetters({
            getTasks: 'data/getTasks',
            getTotalTime: 'data/getTotalTime',
            getPopups: 'ui/getPopups',
        }),
    },

    methods: {
        onAddTask() {
            this.$store.dispatch('data/createTask');
        },
        /**
         * @param {Object} eventArgs 
         */
        onTaskStateChanged(eventArgs) {
            this.$store.dispatch('data/changeTaskState', eventArgs.taskData);
            console.log('onTaskStateChanged:');
            console.log(eventArgs.taskData);
        },

        onTaskEdit(eventArgs) {
            this.$store.dispatch('ui/showTaskEditPopup', eventArgs.taskData);
            console.log('onTaskEdit:');
            console.log(eventArgs.taskData);
        },

        onEditTaskPopupClose() {
            this.$store.dispatch('ui/closeTaskEditPopup');
        },

        onEditTaskPopupSubmit(eventArgs) {
            this.$store.dispatch('ui/closeTaskEditPopup');

            this.$store.dispatch('data/updateTaskTitle', eventArgs);
            this.$store.dispatch('data/updateTaskAdditional', eventArgs);
        },

        onTaskDelete(eventArgs) {
            this.$store.dispatch('ui/showTaskDeletePopup', eventArgs.taskData);
            console.log('onTaskDelete:');
            console.log(eventArgs.taskData);
        },

        onDeleteTaskPopupClose() {
            this.$store.dispatch('ui/closeTaskDeletePopup');
        },

        onDeleteTaskPopupSubmit(eventArgs) {
            this.$store.dispatch('ui/closeTaskDeletePopup');

            this.$store.dispatch('data/deleteTask', eventArgs);
        },

        onClearAllTasks() {
            console.log('onClearAllTasks:');
            this.$store.dispatch('ui/showDeleteAllTasksPopup', this.getTasks);
        },

        onDeleteAllTasksPopupClose() {
            this.$store.dispatch('ui/closeDeleteAllTasksPopup');
        },

        onDeleteAllTasksPopupSubmit() {
            this.$store.dispatch('ui/closeDeleteAllTasksPopup');

            this.$store.dispatch('data/clearTasksData');
        },
    }
}
</script>

<style lang="scss" scoped>
.is-circular{
    border-radius: 50%;
}
// html, body, #app {
//     height: 100%;
// }

// #app {
//     background: #6e6e6e;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     -webkit-align-items: center;
//     justify-content: center;
//     -webkit-justify-content: center;
// }

// #app-tasks-rows {
//     background: silver;
//     width: 80%;
// }
</style> 
