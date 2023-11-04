<template>
    <div class="modal is-active">
        <div class="modal-background" @click="onClose">
        </div>
        <div class="modal-card" v-if="exist">
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
        <task-not-found v-else
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
    name: "deleteTaskPopup",

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
        onClose() {
            this.close()
        },

        onSubmit() {
            const payload = {
                id : this.id,
            };

            this.$store.dispatch('data/deleteTask', payload);
            this.close();
        },

        close()
        {
            this.$router.go(-1);
        },
    },
}
</script>