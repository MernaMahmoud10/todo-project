const Todo = () => {
    return (
        <div className="col-md-4  todo px-4">
            <div className="tasksList">
                <div className="listTitle px-3 py-2">
                    <h5 className="ms-2">To-Do</h5>
                    <div className="listOfTasks">
                        <div className="task m-2 p-2">
                            <p>task title :</p>
                            <div className="btsDiv d-flex justify-content-between w-100">
                                <button className="Edit btn btn-primary w-25">Edit</button>
                                <button className="Edit btn btn-danger w-25">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Todo