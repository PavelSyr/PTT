<template>
    <div id="task-entry" class="hero is-small" :class="{ 'is-light': isOdd }">
        <div class="hero-body columns is-vcentered">
            <div id="task-entry-created-at" class="column is-2">
                <div class="subtitle">
                    <span>{{ formattedCreatedAt }}</span>
                </div>
            </div>
            <div id="task-entry-btn" class="column is-2">
                <div class="level">
                    <button class="level-left button is-primary" @click="changeTaskState">
                        <i class="fa fa-solid fa-2x" :class="{ 'fa-play': isNotInProgress, 'fa-pause': isInProgress }"></i>
                    </button>

                    <button class="level-right button is-link" @click="editTask">
                        <i class="fa fa-solid fa-pencil fa-2x"></i>
                    </button>
                </div>
            </div>
            <div id="task-entry-title" class="column">
                <div class="subtitle">
                    <span>{{ title }}</span>
                </div>
            </div>
            <div id="task-entry-time" class="column">
                <div class="subtitle">
                    <span>{{ formatedTotal }}</span>
                </div>
            </div>
            <div id="task-entry-btn" class="column is-1">
                <button class="button is-danger" @click="deleteTask">
                    <i class="fa fa-solid fa-trash fa-2x"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { states } from '../states.js';
import { timeProvider } from '../timeProvider';

export default {
    name: "TaskListItem",

    props: {
        taskData: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            default: 0,
            required: false,
        }
    },

    data() {
        return {
            createdAt: this.taskData.createdAt,
        }
    },

    computed: {
        title() {
            return this.taskData.title;
        },

        formatedTotal() {
            return timeProvider.formatedDurationInHoursWithHumanize(this.taskData.total + this.taskData.additional);
        },

        formattedCreatedAt() {
            return timeProvider.formattedDateTime(this.createdAt);
        },

        isOdd() {
            return this.index % 2 == 0;
        },

        isNotInProgress() {
            return this.isIdle || this.isPaused;
        },

        isIdle() {
            return this.taskData.state === states.idle;
        },

        isPaused() {
            return this.taskData.state === states.paused;
        },

        isInProgress() {
            return this.taskData.state === states.inProgress;
        },
    },

    methods: {
        changeTaskState() {
            this.$emit("stateChanged", {
                taskData: this.taskData
            })
        },

        editTask() {
            this.$emit("edit", {
                taskData: this.taskData
            });
        },

        deleteTask() {
            this.$emit("delete", {
                taskData: this.taskData
            });
        }
    }
}
</script>