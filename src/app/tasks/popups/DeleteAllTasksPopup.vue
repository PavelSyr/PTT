<template>
    <div class="modal is-active">
        <div class="modal-background" @click="onClose">
        </div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete All Tasks</p>
                <button class="delete" aria-label="close" @click="onClose"></button>
            </header>
            <section class="modal-card-body">
                <div class="subtitle">
                    <span>Are you sure you want to delete {{ tasksCount }} {{ tasksText }}?</span>
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
import { mapGetters } from 'vuex';

export default {
    name: "deleteAllTasksPopup",

    computed: {
        ...mapGetters({
            getTasks: 'data/getTasks',
        }),

        tasksCount() {
            return this.tasksData.length;
        },

        tasksText() {
            return this.tasksCount > 1 ? 'tasks' : 'task';
        }
    },
    
    data() {
        return {
            tasksData: [],
        }
    },

    created() {
        this.tasksData = this.getTasks;
    },

    methods: {
        onClose() {
            this.close();
        },
        
        onSubmit() {
            this.$store.dispatch('data/clearTasksData');
            this.close();
        },

        close(){
            this.$router.go(-1);
        },
    },
}
</script>