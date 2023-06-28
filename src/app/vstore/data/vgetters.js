export const getters = {
    getTasks: state => state.tasks,
    getTotalTime: state => state.tasks.map(t => t.total + t.additional).reduce((s, t) => s + t, 0),
}