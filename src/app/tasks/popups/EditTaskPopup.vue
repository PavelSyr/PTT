<template>
    <div class="modal is-active">
        <div class="modal-background" @click="onClose">
        </div>
        <div class="modal-card" v-if="exist">
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
        <task-not-found
            v-else
            :id="id"
            @close="onClose"
        ></task-not-found>>
    </div>
</template>

<script lang="js">
import { mapGetters } from 'vuex';
import { timeProvider } from '../../timeProvider';
import TaskNotFound from './TaskNotFound.vue';

export default {
    name: "editTaskPopup",

    components: {
        'task-not-found' : TaskNotFound
    },

    props: {
        id: {
            type: String,
            required: false,
        },
    },

    computed: {
        ...mapGetters({
            getTasks: 'data/getTasks',
        }),

        formatedTotal() {
            return timeProvider.formatedDurationInHours(this.total + this.additional);
        },

        formatedAdditional() {
            return timeProvider.formatedDurationInHours(this.additional);
        },

        formattedCreatedAt() {
            return timeProvider.formattedDateTime(this.createdAt);
        },
    },

    data() {
        return {
            exist: false,
            title: undefined,
            total: 0,
            additional: 0,
            createdAt: undefined,
        }
    },

    mounted() {
        let ts = this.getTasks;
        let taskData = ts.find(t => t.id === this.id);

        this.exist = taskData !== undefined;

        if (this.exist)
        {
            this.title = taskData.title;
            this.total = taskData.total;
            this.additional = taskData.additional;
            this.createdAt = taskData.createdAt;
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
            this.close();
        },

        onSubmit() {
            const payload = {
                title: this.title,
                additional: this.additional,
                id: this.id,
            }

            this.$store.dispatch('data/updateTaskTitle', payload);
            this.$store.dispatch('data/updateTaskAdditional', payload);
            this.close();
        },

        close()
        {
            this.$router.go(-1);
        },
    },
}
</script>