import moment from 'moment';

export const timeProvider = {
    /**
     * @param {Number} total 
     * @returns 
     */
    formatedDurationInHoursWithHumanize(total) {
        const duration = moment.duration(total);
        return `${duration.asHours().toFixed(2)}h / ${duration.humanize()}`;
    },

    /**
     * @param {Number} total 
     * @returns 
     */
    formatedDurationInHours(total) {
        const duration = moment.duration(total);
        return `${duration.asHours().toFixed(2)}h`;
    },

    /**
     * @param {Date} dateTime 
     * @returns 
     */
    formattedDateTime(dateTime) {
        return new Intl.DateTimeFormat('en-GB', { timeStyle: 'medium' }).format(dateTime);
    },

    getFromMinutes(minutes) {
        return moment.duration(minutes, 'minutes').asMilliseconds();
    },

    getPercent(total) {
        const duration = moment.duration(total);

        return duration.asHours() / 8.0;
    },
}