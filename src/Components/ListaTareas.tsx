import Task from "./Task";

type TaskList = {
  taskList: string[];
  deleteTask: (index: number) => void;
};

const ListaTareas = ({ taskList, deleteTask }: TaskList) => {
  return (
    <div className="taskList">
      {taskList.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
};

export default ListaTareas;
