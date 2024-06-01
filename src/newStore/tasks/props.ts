export type DashboardState =
    {
        myTasks?: Task[]
    }

export interface Task {
    userId: number
    id: number
    title: string
    completed: boolean
    status: string
}
