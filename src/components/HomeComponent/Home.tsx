import axios from 'axios'
import TasksList from '../tasksList/TasksList'
import { useEffect, useState } from 'react'
import { Task } from '../../newStore/tasks/props'
import { dashboardSliceActions } from '../../newStore/tasks'
import { useAddNotification } from '../../helpers/addNotification'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'newStore'

const Home = () => {
    const dispatch = useDispatch()
    const myTasks = useSelector((state: RootState) => state?.dashboard?.myTasks)
    const [activeCard, setActiveCard] = useState<number | undefined>(undefined)
    const [laststatus, setLaststatus] = useState<string>("")

    const getTasks = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
            .then(response => {
                const data = response.data;
                let myTasksArr: Task[] = []
                const doneTasks: Task[] = data?.filter((task: Task) => task.completed == true)
                const todoTasks: Task[] = data?.filter((task: Task) => task.completed == false)
                doneTasks.map((task: Task) => myTasksArr?.push({
                    userId: task?.userId,
                    id: task?.id,
                    title: task?.title,
                    completed: task?.completed,
                    status: "done"
                }));
                todoTasks?.slice(0, todoTasks?.length / 2).map((task: Task) => myTasksArr?.push({
                    userId: task?.userId,
                    id: task?.id,
                    title: task?.title,
                    completed: task?.completed,
                    status: "todo"
                }));
                todoTasks?.slice(todoTasks?.length / 2, todoTasks?.length - 1).map((task: Task) => myTasksArr?.push({
                    userId: task?.userId,
                    id: task?.id,
                    title: task?.title,
                    completed: task?.completed,
                    status: "inProgress"
                }));
                dispatch(dashboardSliceActions?.setMyTasks(myTasksArr))
            })
            .catch(error => {
                if (error.message) {
                    useAddNotification(error.message, "Error", "danger")
                }
            })

    }
    useEffect(() => {
        getTasks()
    }, [])

    const onDrop = (status: string, position: number) => {
        // console.log(`task number ${activeCard} it was in ${laststatus} and now num ${position} in ${status}`)
        if (activeCard == null || activeCard == undefined || (laststatus == "todo" && status == "done")) return;
        if (myTasks) {
            const taskToMove = myTasks[activeCard]
            const updatedTasks = myTasks?.filter((task: Task, index: number) => index !== activeCard)
            updatedTasks.splice(position, 0, {
                ...taskToMove,
                status: status
            })
            dispatch(dashboardSliceActions?.setMyTasks(updatedTasks))
        }

    }



    return (
        <>
            <section id='home'>
                <div className='title'>
                    <h3 className="text-white">Atlassian basic board</h3>
                </div>
                <div className="container-fluid">
                    <div className="row pt-4">
                        <TasksList title={"To-Do"} tasks={myTasks} setLaststatus={setLaststatus}
                            setActiveCard={setActiveCard} status="todo" onDrop={onDrop} laststatus={laststatus} />

                        <TasksList title={"In Progress"} tasks={myTasks} setLaststatus={setLaststatus}
                            setActiveCard={setActiveCard} status="inProgress" onDrop={onDrop} laststatus={laststatus} />

                        <TasksList title={"Done"} tasks={myTasks} setLaststatus={setLaststatus}
                            setActiveCard={setActiveCard} status="done" onDrop={onDrop} laststatus={laststatus} />

                    </div>
                </div>

            </section>
        </>
    )
}

export default Home