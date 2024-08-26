import { useState } from "react"
import '../styles.css'
import ListaTareas from "./ListaTareas";


const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>('');

    const [listaTareas, setlistaTareas] = useState<string[]>([])

    const handleAddTask = () => {
        if(newTask.trim() === '' ) return
        setlistaTareas(prevTasks => [...prevTasks,newTask ])
        setNewTask('')


    }

    const handleDeleteTask = (index:number) => {
        setlistaTareas(tasks => tasks.filter((_,i) => i !== index ) )

    }

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value) }
        placeholder="Nueva tarea" />

        <button onClick={handleAddTask} >Add Task</button>
      </div>

      <ListaTareas taskList={listaTareas} deleteTask={handleDeleteTask}  />

    </div>
  )
}

export default TodoApp
