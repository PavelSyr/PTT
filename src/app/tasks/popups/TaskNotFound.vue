<template>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Task not found</p>
            <button class="delete" aria-label="close" @click="onClose"></button>
        </header>
        <section class="modal-card-body has-text-centered">
            <p class="heading">Task id</p>
            <p class="subtitle">{{ id }}</p>
        </section>
    </div>
</template>

<script lang="js">
export default {
    name: 'TaskNotFound',

    props: {
        id: {
            type: String,
            required: false,
        }
    },

    methods:{
        onClose(){
            this.$emit("close");
        },
    }
}
</script>