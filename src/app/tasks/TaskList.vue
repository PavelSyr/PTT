<template>
    <div id="app-task-list" class="container">
        <section class="hero is-link is-small">
            <div class="hero-body">
                <p class="title">PTT</p>
                <p class="subtitle">Let's track...</p>
                <header-summary 
                    :totalTime="getTotalTime" 
                    @clear-all="onClearAllTasks"
                ></header-summary>
                <week-component 
                    :daysData="getCurrentWeek"
                ></week-component>
            </div>
        </section>
        <div id="app-tasks-rows">
            <task-list-item v-for="(t, index) in getTasks"
                @delete="onTaskDelete"
                @edit="onTaskEdit"
                @stateChanged="onTaskStateChanged" 
                :key="t.id" 
                :taskData="t" 
                :index="index"
            ></task-list-item>
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
        <router-view></router-view>
    </div>
</template>

<script lang="js">
import TaskListItem from './TaskListItem.vue';
import HeaderSummary from '../components/HeaderSummary.vue';
import WeekComponent from '../components/calendar/WeekComponent.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'TaskList',

    components: {
        'task-list-item': TaskListItem,
        'header-summary': HeaderSummary,
        'week-component': WeekComponent,
    },

    props: {
    },

    data() {
        return {
        }
    },

    computed: {
        ...mapGetters({
            getTasks: 'data/getTasks',
            getTotalTime: 'data/getTotalTime',
            getCurrentWeek: 'data/getCurrentWeek',
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
            this.$router.push(`tasks/popup/edit/${eventArgs.taskData.id}`);
            console.log('onTaskEdit:');
            console.log(eventArgs.taskData);
        },

        onTaskDelete(eventArgs) {
            this.$router.push(`tasks/popup/delete/${eventArgs.taskData.id}`);
            console.log('onTaskDelete:');
            console.log(eventArgs.taskData);
        },

        onClearAllTasks() {
            this.$router.push(`tasks/popup/deleteAll`);
            console.log('onClearAllTasks:');
        },
    }
}
</script>

<style lang="scss" scoped>
.is-circular{
    border-radius: 50%;
}
</style>