import Done from '../DoneComponent/Done'
import InProgress from '../InProgressComponent/InProgress'
import axios from 'axios'
import TodoList from '../todoComponent/Todo'
import { useEffect } from 'react'
import { Task } from '../../newStore/tasks/props'
import { dashboardSliceActions } from '../../newStore/tasks'
import { useAddNotification } from '../../helpers/addNotification'
import { useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const getTasks = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
            .then(response => {
                const data = response.data;
                const todoTasks: Task[] = data?.filter((task: Task) => task.completed == false)
                const doneTasks: Task[] = data?.filter((task: Task) => task.completed == true)
                console.log({todoTasks})
                dispatch(dashboardSliceActions.setTodoList(todoTasks))
                dispatch(dashboardSliceActions.setDoneList(doneTasks))
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

    return (
        <>
            <section id='home'>
                <div className='title'>
                    <h3 className="text-white">Atlassian basic board</h3>
                </div>
                <div className="container-fluid">

                    <div className="row pt-4">
                        <TodoList/>
                        <InProgress />
                        <Done />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home