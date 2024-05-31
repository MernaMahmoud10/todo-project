import { DashboardState, Task } from "./props"

const setDoneList = (
    state: DashboardState,
    payload: { payload: Task[] },
) => {
    state.doneList = {
        ...state.doneList,
        ...payload.payload,
    }
}
const setTodoList = (
    state: DashboardState,
    payload: { payload: Task[] },
) => {
    state.doneList = {
        ...state.doneList,
        ...payload.payload,
    }
}
const setInProgressList = (
    state: DashboardState,
    payload: { payload: Task[] },
) => {
    state.doneList = {
        ...state.doneList,
        ...payload.payload,
    }
}
export default {
    setDoneList,
    setTodoList,
    setInProgressList
}