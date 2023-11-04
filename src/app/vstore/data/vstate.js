import { seedData } from "../../seed.js";
const devTasks = seedData.createTasksDev();

export const state = {
    tasks: devTasks,
    calendar: {
        currentWeek: seedData.createWeek(new Date()),
    }
}