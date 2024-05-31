import { useSelector } from "react-redux"
import { RootState } from "newStore"
import { Task } from "newStore/tasks/props"


const Done = () => {
  const doneList = useSelector((state: RootState) => state?.dashboard?.doneList)
  return (
    <div className="col-md-4 done px-4">
      <div className="tasksList">
        <div className="listTitle px-3 py-2">
          <h5 className="ms-2">Done</h5>
          <div className="listOfTasks">
            {doneList ? doneList.map((task: Task, index) =>
              <div className="task m-2 mb-3 p-2" key={index}>
                <p>{task?.title}</p>
                <div className="btsDiv d-flex justify-content-between w-100">
                  <button className="Edit btn btn-primary w-25">Edit</button>
                  <button className="Edit btn btn-danger w-25">Delete</button>
                </div>
              </div>
            ) : null}

          </div>
        </div>
      </div>

    </div>
  )
}

export default Done