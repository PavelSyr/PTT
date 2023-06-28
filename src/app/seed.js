import { states } from './states.js';

export const seedData = {
    createGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    creatTask(title) {
        const now = new Date();
        return {
            id: this.createGuid(),
            title: title,
            createdAt: now,
            state: states.idle,
            pauseAt: [],
            startAt: [],
            total: 0,
            additional: 0,
        }
    },

    createTasksDev() {
        return [
            {
                ...this.creatTask('task 1'),
            },
            {
                ...this.creatTask('task 2'),
            },
        ];
    },
}