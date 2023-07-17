<template>
    <div class="columns">
        <day-of-week
         v-for="data in daysData"
         :key="data.id"
         :dayOfWeek="data.dayOfWeek"
         :shortDate="data.shortDate"
         :isCurrentDay="data.isCurrentDay"
         @click="()=>selectDay(data)"
        >
        </day-of-week>
    </div>
</template>

<script lang="js">
import DayOfWeek from './DayOfWeek.vue';

export default {
    name: "WeekComponent",
    
    components: {
        "day-of-week": DayOfWeek,
    },

    props: {
        daysData: {
            type: Array,
            required: false,
            default: () => [],
        },
    },

    methods: {
        selectDay(dayData) {
            console.log(dayData);
        },
    }
}
</script>