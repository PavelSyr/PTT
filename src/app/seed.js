import { states } from './states.js';
import { timeProvider } from './timeProvider.js';

export const seedData = {
    createGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    creatTask(title, id) {
        const now = new Date();
        return {
            id: id ?? this.createGuid(),
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
                ...this.creatTask('task 1', "test1111-1111-1111-1111-2222test1111"),
            },
            {
                ...this.creatTask('task 2', 'test2222-2222-2222-2222-2222test2222'),
            },
        ];
    },

    createDayData(date, isCurrentDay) {
        return {
            dayOfWeek: timeProvider.getDayOfWeek(date),
            shortDate: timeProvider.getShortDate(date),
            date: date,
            isCurrentDay : isCurrentDay,
        }
    },

    /**
     * @param {Date} date 
     * @returns 
     */
    createWeek(date) {
        const timestamp = date.getTime();
        return timeProvider
            .getWeek(date)
            .map(day => this.createDayData(day, day === timestamp))
    }
}