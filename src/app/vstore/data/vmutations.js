import { states } from "../../states.js";
import { seedData } from "../../seed.js";
import { storeMutationsHelpers } from "../storeMutationsHelpers.js";
import * as types from './mutation-types';

export const mutations = {
    [types.CREATE_TASK] (state)
    {
        const name = 'task ' + (state.tasks.length + 1);

        state.tasks.push({
            ...seedData.creatTask(name),
        });
    },

    [types.UPDATE_TASK_TITLE] (state, payload) {
        let task = payload;
        let t = state.tasks.find((t) => t.id === task.id);

        t.title = task.title;
    },

    [types.UPDATE_TASK_ADDITIONAL] (state, payload) {
        let task = payload;
        let t = state.tasks.find((t) => t.id === task.id);

        t.additional = task.additional;
    },

    [types.CHANGE_TASK_STATE] (state, payload) {
        let task = payload;
        let t = state.tasks.find((t) => t.id === task.id);

        if (t.state !== states.inProgress) {
            t.state = states.inProgress;
            t.startAt.push({ start: new Date(), end: undefined });

            storeMutationsHelpers.finishTimeSlot(t.pauseAt);

            t.total = storeMutationsHelpers.calculateTotalTime(t.startAt);
        }
        else {
            t.state = states.paused;
            t.pauseAt.push({ start: new Date(), end: undefined });

            storeMutationsHelpers.finishTimeSlot(t.startAt);

            t.total = storeMutationsHelpers.calculateTotalTime(t.startAt);
        }
    },

    [types.DELETE_TASK] (state, payload) {
        state.tasks = state.tasks.filter((t) => t.id !== payload.id);
    },

    [types.CLEAR_TASKS_DATA] (state) {
        state.tasks.length = 0;
    }
}