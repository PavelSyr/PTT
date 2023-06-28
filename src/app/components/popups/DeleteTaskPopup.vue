<template>
    <div class="modal is-active">
        <div class="modal-background" @click="onClose">
        </div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Task</p>
                <div class="modal-card-title">
                    <p class="heading">Created at</p>
                    <p class="subtitle">{{ formattedCreatedAt }}</p>
                </div>
                <div class="modal-card-title">
                    <p class="heading">Duration</p>
                    <p class="subtitle">{{ formatedTotal }}</p>
                </div>
                <button class="delete" aria-label="close" @click="onClose"></button>
            </header>
            <section class="modal-card-body">
                <div class="subtitle">
                    <span>{{ title }}</span>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-danger" @click="onSubmit">Delete</button>
                <button class="button" @click="onClose">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script lang="js">
import { timeProvider } from '../../timeProvider';

export default {
    name: "deleteTaskPopup",

    props: {
        taskData: {
            type: Object,
            required: true,
        }
    },

    computed: {
        formatedTotal() {
            return timeProvider.formatedDurationInHours(this.total + this.additional);
        },

        formatedAdditional() {
            return timeProvider.formatedDurationInHours(this.additional);
        },

        formattedCreatedAt() {
            return timeProvider.formattedDateTime(this.taskData.createdAt);
        },
    },

    data() {
        return {
            title: this.taskData.title,
            total: this.taskData.total,
            additional: this.taskData.additional,
        }
    },

    methods: {
        onClose() {
            this.$emit("close");
        },

        onSubmit() {
            this.$emit("submit", {
                id: this.taskData.id,
            });
        },
    },
}
</script>