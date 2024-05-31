import { DashboardState, Task } from "./props"

const setDoneList = (
    state: DashboardState,
    payload: { payload: Task[] },
) => {
    state.doneList =
        payload.payload
}

const setTodoList = (
    state: DashboardState,
    payload: { payload: Task[] },
) => {
    state.todoList =
        payload.payload
}

const setInProgressList = (
    state: DashboardState,
    payload: { payload: Task[] },
) => {
    state.inprogressList =
        payload.payload
}

export default {
    setDoneList,
    setTodoList,
    setInProgressList
}