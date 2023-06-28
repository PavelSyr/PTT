<template>
    <div class="level is-vcentered">
        <div class="level-left">
            <div class="level-item">
                <div class="heading">
                    <span>{{ getFormatedTotal }}</span>
                    <progress class="progress is-primary" :value="getTotalTimePercent" max="100"></progress>
                </div>
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <button class="button is-danger" @click="onClearAll">
                    <span>Delete</span>
                    <span class="icon is-small">
                        <i class="fa fa-times"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { timeProvider } from '../timeProvider';

export default {
    name: "header-summary",
    props: {
        totalTime: {
            type: Number,
            required: true,
        },
    },

    computed: {
        getTotalTimePercent() {
            return timeProvider.getPercent(this.totalTime) * 100;
        },

        getFormatedTotal() {
            return timeProvider.formatedDurationInHoursWithHumanize(this.totalTime);
        },
    },

    methods: {
        onClearAll() {
            this.$emit('clear-all');
        },
    },
}
</script>