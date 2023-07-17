import { seedData } from "../../seed.js";

export const state = {
    tasks: seedData.createTasksDev(),
    calendar: {
        currentWeek: seedData.createWeek(new Date()),
    }
}