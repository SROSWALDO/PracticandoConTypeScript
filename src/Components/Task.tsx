
type TaskProp = {
    task: string
    deleteTask: () => void
}

const Task = ({task, deleteTask}: TaskProp) => {
  return (
    <div className="task">
        <span>{task}</span>
        <button onClick={deleteTask} >deleteTask</button>

    </div>
  )
}

export default Task