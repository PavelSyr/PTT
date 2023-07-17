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

    getWeek(dateTime) {
        return Array
            .from(
                { length: 7 },
                (value, index) => moment(dateTime).weekday(index).valueOf()
            );
    },

    getDayOfWeek(dateTime) {
        return moment(dateTime).format('dddd').substring(0,3)
    },

    getShortDate(dateTime) {
        return moment(dateTime).format('DD-MM')
    },
}