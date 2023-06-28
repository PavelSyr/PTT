<template>
    <div class="modal is-active">
        <div class="modal-background" @click="onClose">
        </div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Edit Task</p>
                <button class="delete" aria-label="close" @click="onClose"></button>
            </header>
            <section class="modal-card-body">
                <div class="columns has-text-centered">
                    <div class="column">
                        <p class="heading">Created at</p>
                        <p class="subtitle">{{ formattedCreatedAt }}</p>
                    </div>
                    <div class="column">
                        <p class="heading">Duration</p>
                        <p class="subtitle">{{ formatedTotal }}</p>
                    </div>
                    <div class="column">
                        <p class="heading">Additional</p>
                        <div class="level">
                            <div class="level-item">
                                <button class="button is-small" @click="onMinus">
                                    <i class="fa fa-solid fa-minus"></i>
                                </button>
                            </div>
                            <div class="level-item">
                                <span class="subtitle">{{ formatedAdditional }}</span>
                            </div>
                            <div class="level-item">
                                <button class="button is-small" @click="onPlus">
                                    <i class="fa fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input class="input is-primary" type="text" placeholder="Primary input" v-model="title">
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="onSubmit">Save changes</button>
                <button class="button" @click="onClose">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script lang="js">
import { timeProvider } from '../../timeProvider';

export default {
    name: "editTaskPopup",

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
        onMinus() {
            this.additional -= timeProvider.getFromMinutes(10);
        },

        onPlus() {
            this.additional += timeProvider.getFromMinutes(10);
        },

        onClose() {
            this.$emit("close");
        },

        onSubmit() {
            this.$emit("submit", {
                title: this.title,
                additional: this.additional,
                id: this.taskData.id,
            });
        },
    },
}
</script>