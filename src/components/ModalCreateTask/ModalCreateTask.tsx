import { RootState } from "newStore";
import { dashboardSliceActions } from '../../newStore/tasks'
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Task } from "newStore/tasks/props";

interface ModalCreateTaskProps {
    taskDetailsIsOpened: boolean
    settaskDetailsIsOpened: React.Dispatch<React.SetStateAction<boolean>>
    toggleModalCreate: () => void
    taskIndex: number | null
    listStatus: string
}
export default function ModalCreateTask(props: ModalCreateTaskProps) {
    const dispatch = useDispatch()
    const myTasks = useSelector((state: RootState) => state?.dashboard?.myTasks)
    const [taskData, setTaskData] = useState<any>(undefined)
    useEffect(() => {
        if (props?.taskIndex == null) {
            const myTaskId = Number(myTasks?.[length - 1]?.id) + 1;
            setTaskData({
                userId: 1,
                title: "",
                completed: false,
                status: props?.listStatus,
                id: myTaskId
            })
        }
        else {
            if (myTasks) {
                const taskToEdit = myTasks?.[props?.taskIndex]
                setTaskData({
                    id: taskToEdit?.id,
                    completed: taskToEdit?.completed,
                    status: taskToEdit?.status,
                    title: taskToEdit?.title,
                    userId: taskToEdit?.userId
                })
            }
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name == "status" && value == "done") {
            setTaskData((prev: any) => {
                return {
                    ...prev, [name]: value,
                    completed: true
                };
            });
        }
        else {

            setTaskData((prev: any) => {
                return {
                    ...prev, [name]: value,
                    completed: false
                };
            });
        }

    };

    const handleSubmit = () => {
        debugger
        if (props?.taskIndex == null) {
            if (taskData)
                if (myTasks) {
                    const myNewTasks: Task[] = [...myTasks]
                    myNewTasks.push(taskData)
                    dispatch(dashboardSliceActions?.setMyTasks(myNewTasks))
                    props?.toggleModalCreate()
                }

        }
        else {
            if (myTasks) {
                const myNewTasks: Task[] = [...myTasks]
                myNewTasks[props?.taskIndex] = taskData;
                dispatch(dashboardSliceActions?.setMyTasks(myNewTasks))
                props?.toggleModalCreate()
            }
        }
    }

    return (<>
        <Modal
            isOpen={props?.taskDetailsIsOpened}
            toggle={props?.toggleModalCreate}
            size="md"
            className="create-task">
            <ModalHeader className="font-weight-bold d-flex" toggle={props?.toggleModalCreate}>
                {props?.taskIndex == null ? "Add New Task" : "Edit Task"}
            </ModalHeader>
            <ModalBody className="">
                <label className="pb-1">Task Name:</label>
                <input className="form-control"
                    name="title"
                    value={taskData?.title}
                    onChange={(e) => handleChange(e)}
                    placeholder="enter the task Name" />

                {
                    props?.taskIndex !== null ?
                        <>
                            <label className="pb-1 pt-3">Task Status:</label>
                            <select className="form-control"
                                name="status"
                                value={taskData?.status}
                                onChange={(e) => handleChange(e)}>
                                {taskData?.status == "todo" ?
                                    <>
                                        <option value="todo">To-Do</option>
                                        <option value="inProgress">In Progress</option>
                                    </>
                                    :
                                    taskData?.status == "inProgress" ?
                                        <> <option value="todo">To-Do</option>
                                            <option value="inProgress">In Progress</option>
                                            <option value="done">done</option>
                                        </>
                                        : <option value="done">done</option>}


                            </select>
                        </> : null
                }
                <div className="btnDiv d-flex mt-4 justify-content-center">
                    <button className="actionBtn py-2 px-4" onClick={handleSubmit}>
                        {props?.taskIndex == null ? "Add" : "Edit"}
                    </button>
                </div>
            </ModalBody>
        </Modal >
    </>)
}

