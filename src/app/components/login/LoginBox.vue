<template>
    <div id="login" class="box has-text-centered">
        <h2 class="title">PTT</h2>
        <button
            class="button is-primary"
            @click="login"
            >Login</button>
    </div>
</template>
  
<script>
export default {
    name: "LoginBox",

    methods: {
        login() {
            const payload = { username: "default" }
            this.$store.dispatch("pttapi/login", payload).then(() => {
                this.$router.push({ path: '/tasks' });
            });
        }
    },
};
</script>