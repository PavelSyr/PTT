export const storeMutationsHelpers = {
    /**
     * @param {Array} times 
     */
    finishTimeSlot(times) {
        let slot = times.pop();

        if (slot) {
            slot.end = new Date();
            times.push(slot)
        }
    },

    /**
    * @param {Array} times 
    */
    calculateTotalTime(times) {
        return times
            .map((a) => (a.end === undefined ? new Date() : a.end) - a.start)
            .reduce((partialSum, a) => partialSum + a, 0);
    },
}