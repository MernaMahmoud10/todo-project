export type DashboardState =
    {
        todoList?: Task[],
        inprogressList?: Task[],
        doneList?: Task[]
    }

export interface Task {
    userId: number
    id: number
    title: string
    completed: boolean
}