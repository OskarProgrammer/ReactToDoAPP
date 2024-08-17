import { useState } from 'react'
import { Task } from './components/Task'
import './App.css'


const initialTasks = [
  {task: "Make Dinner", key: crypto.randomUUID()}
]

function App() {
  let [tasks, setTasks] = useState(initialTasks)
  const [newTask, setNewTask] = useState("")

  const deleteTask = (key) => {
    const newTasks = []

    for (let task of tasks) {
      if (task.key !== key) {
        newTasks.push(task)
      }
    }

    tasks = newTasks
    setTasks(newTasks)

  }

  const addTask = () => {
    if (newTask === "") {return}

    const newTas = {
      task: newTask, key: crypto.randomUUID()
    }

    const newTasks = [...tasks, newTas]

    tasks = newTasks
    setTasks(tasks)
    setNewTask("")
  }

  const editTask = (key, newText) => {
    const newTasks = []
    for (let task of tasks) {
      if (task.key == key){
        task.task = newText
      }
      newTasks.push(task)
    }

    tasks = newTasks
    setTasks(tasks)
  }


  return (
    <>
      <h2 className="title">To Do APP</h2>

      <div className="newTask">
        <input type="text" placeholder='New Task' value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}/>
        <button onClick={() => {addTask()}}>Create</button>
      </div>

      <div className="tasks">
          {tasks.map((task)=>{
            return <Task onEdit={editTask} onRemove={deleteTask} task={task.task} taskKey={task.key}/>
          })}
      </div>
    </>
  )
}

export default App
