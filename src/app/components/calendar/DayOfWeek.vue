<template>
    <div class="column has-text-centered">
        <p class="heading">{{ dayOfWeek }}</p>
        <p class="subtitle">{{ shortDate }}</p>
    </div>
</template>
<script lang="js">

export default {
    props: {
        dayOfWeek: {
            type: String,
            required: true,
        },
        shortDate: {
            type: String,
            required: true,
        }
    },
}
</script>