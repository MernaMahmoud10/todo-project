import { DashboardState, Task } from "./props"

const setMyTasks = (
    state: DashboardState,
    payload: { payload: Task[] },
) => {
    state.myTasks =
        payload.payload
}



export default {
    setMyTasks
}