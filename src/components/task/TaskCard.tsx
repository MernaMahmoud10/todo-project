import { RootState } from "../../newStore";
import { dashboardSliceActions } from "../../newStore/tasks";
import { Task } from "../../newStore/tasks/props";
import { SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TaskCard(props: {
    index: number,
    task: Task,
    setActiveCard: React.Dispatch<React.SetStateAction<number | undefined>>,
    draggable: boolean,
    setLaststatus: React.Dispatch<React.SetStateAction<string>>
    status: string
    goToModalcreate: (Index: SetStateAction<number | null>) => void
}) {
    const dispatch = useDispatch()
    const myTasks = useSelector((state: RootState) => state?.dashboard?.myTasks)

    const deleteTask = (deletedTaskIndex: number) => {
        if (myTasks) {
            let myNewTasks: Task[] = [...myTasks]
            myNewTasks?.splice(deletedTaskIndex, 1)
            dispatch(dashboardSliceActions?.setMyTasks(myNewTasks))
        }
    }
    return (
        <div className="task mx-2 my-1 p-2" key={props?.index} draggable={props?.draggable}
            onDragStart={() => { props?.setActiveCard(props?.index); props?.setLaststatus(props.status) }}
            onDragEnd={() => props?.setActiveCard(undefined)}>
            <p>{props?.task?.title}</p>
            <div className="btsDiv d-flex justify-content-between w-100">
                <button className="Edit btn btn-primary w-25" onClick={() => props?.goToModalcreate(props?.index)}>Edit</button>
                <button className="Edit btn btn-danger w-25" onClick={() => deleteTask(props?.index)}>Delete</button>
            </div>
        </div>
    )
}
