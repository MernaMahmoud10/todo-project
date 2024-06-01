import { Task } from "newStore/tasks/props";
import { SetStateAction } from "react";

export default function TaskCard(props: {
    index: number,
    task: Task,
    setActiveCard: React.Dispatch<React.SetStateAction<number | undefined>>,
    draggable: boolean,
    setLaststatus: React.Dispatch<React.SetStateAction<string>>
    status: string
    goToModalcreate: (Index: SetStateAction<number | null>) => void

}) {
    return (
        <div className="task mx-2 my-1 p-2" key={props?.index} draggable={props?.draggable}
            onDragStart={() => { props?.setActiveCard(props?.index); props?.setLaststatus(props.status) }}
            onDragEnd={() => props?.setActiveCard(undefined)}>
            <p>{props?.task?.title}</p>
            <div className="btsDiv d-flex justify-content-between w-100">
                <button className="Edit btn btn-primary w-25" onClick={() => props?.goToModalcreate(props?.index)}>Edit</button>
                <button className="Edit btn btn-danger w-25">Delete</button>
            </div>
        </div>
    )
}
