<template>
    <div 
        class="column has-text-centered"
        :class="{ 'current-day': isCurrentDay }">
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
        },
        isCurrentDay: {
            type: Boolean,
            required: false,
            default: () => false,
        }
    },
}
</script>
<style lang="scss" scoped>

.current-day {
    background-color:rgba($color: #ffffff, $alpha: 0.15);
}

</style>