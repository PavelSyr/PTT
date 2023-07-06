<template>
    <div class="columns">
        <day-of-week
         v-for="data in daysData"
         :key="data.id"
         :data="data"
        >
        </day-of-week>
    </div>
</template>

<script lang="js">
import DayOfWeek from './DayOfWeek.vue';

export default {
    name: "Week",
    
    components: {
        "day-of-week": DayOfWeek,
    }

    props: {
        daysData: {
            type: Array,
            required: false,
            default: [],
        },
    },

    computed: {

    },

    data() {
        return {

        };
    },

    methods: {

    }

}
</script>