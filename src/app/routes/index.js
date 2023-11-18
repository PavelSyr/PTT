import taskList from '../tasks/TaskList.vue'
import editTaskPopup from '../tasks/popups/EditTaskPopup.vue'
import deleteTaskPopup from '../tasks/popups/DeleteTaskPopup.vue'
import deleteAllTaskPopup from '../tasks/popups/DeleteAllTasksPopup.vue'
import NotFound from '../components/NotFoundComponent.vue'
import loginBox from '../components/login/LoginBox.vue'


export const routes = [
    {
        path: "/tasks",
        component: taskList,
        children: [
            {
                component: editTaskPopup,
                path: "popup/edit/:id",
                props: true,
            },
            {
                component: deleteTaskPopup,
                path: "popup/delete/:id",
                props: true,
            },
            {
                component: deleteAllTaskPopup,
                path: "popup/deleteAll"
            }
        ]
    },
    {
        path: '/',
        redirect: '/tasks'
    },
    {
        path: '/login',
        component: loginBox,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]