import { SetStateAction, useEffect, useState } from 'react';
import { Task } from 'newStore/tasks/props';
import DropArea from '../dropArea/DropArea';
import TaskCard from '../task/TaskCard';

import ModalCreateTask from '../ModalCreateTask/ModalCreateTask';

interface MyProps {
    title: string,
    tasks: Task[] | undefined,
    setActiveCard: React.Dispatch<React.SetStateAction<number | undefined>>
    status: string
    onDrop: (status: string, index: number) => void;
    setLaststatus: React.Dispatch<React.SetStateAction<string>>
    laststatus: string
}
export default function TasksList(props: MyProps) {
    const [drop, setDrop] = useState(true)
    const [taskDetailsIsOpened, settaskDetailsIsOpened] = useState<boolean>(false)
    const [taskIndexToEdit, setTaskIndexToEdit] = useState<number | null>(null)

    const toggleModalCreate = () => {
        settaskDetailsIsOpened(!taskDetailsIsOpened)
    }
    const goToModalcreate = (Index: SetStateAction<number | null>) => {
        toggleModalCreate()
        setTaskIndexToEdit(Index)
    }
    useEffect(() => {
        if (props?.laststatus == "todo" && props?.status == "done")
            setDrop(false)
        else
            setDrop(true)

    }, [props?.laststatus, props?.status])

    return (
        <>
            <div className="col-md-4 done px-4">
                <div className="tasksList">
                    <div className="taskListContent px-3 py-2">
                        <h5 className="ms-2">{props?.title}</h5>
                        <div className="listOfTasks">
                            {drop ? <DropArea onDrop={() => props?.onDrop(props?.status, 0)} />
                                : null}
                            {props?.tasks?.map((task: Task, index) =>
                                task?.status === props?.status && (
                                    <>
                                        <TaskCard task={task} index={index} setLaststatus={props?.setLaststatus}
                                            draggable={props?.title == "Done" ? false : true} setActiveCard={props?.setActiveCard}
                                            status={props?.status} goToModalcreate={goToModalcreate}
                                        />
                                        {drop ? <DropArea onDrop={() => props?.onDrop(props?.status, index + 1)} />
                                            : null}
                                    </>)
                            )}
                        </div>
                        <div className='px-3 py-2'>
                            <div className='addTask py-2' role='button' onClick={() => goToModalcreate(null)}>
                                <i className="fa-solid fa-plus px-2"></i>
                                Add New task</div>
                        </div>
                    </div>
                </div>

            </div>

            {taskDetailsIsOpened ? <ModalCreateTask taskDetailsIsOpened={taskDetailsIsOpened}
                settaskDetailsIsOpened={settaskDetailsIsOpened} taskIndex={taskIndexToEdit}
                toggleModalCreate={toggleModalCreate} /> : null}
        </>
    )
}
