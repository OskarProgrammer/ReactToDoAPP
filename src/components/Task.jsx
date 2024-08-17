import { useState } from "react"
import "./Task.css"


export const Task = (props) => {
    const [isDone, setIsDone] = useState(false)
    const [isBeingModified, setIsBeingModified] = useState(false)

    let [edittedTask, setEdittedTask] = useState("")

    const removeTask = () => {
        props.onRemove(props.taskKey)
    }

    const editTask = () => {
        if (edittedTask != ""){
            props.onEdit(props.taskKey, edittedTask)
            setEdittedTask("")
            setIsBeingModified(false)
        }
    }

    return (
        <>

            <div className={isDone ? "task doneTask" : "task"}>
                <p>{props.task} </p>
                <button className={isDone ? "active": "done"} onClick={()=>{setIsDone(!isDone)}} >Made!</button>
                <button className="removeButton" onClick={()=>{removeTask()}}>Remove</button>
                <button className="modifyButton" onClick={()=>{setIsBeingModified(!isBeingModified)}}>Modify</button>
                {isBeingModified ? <p>
                    <input type="text" value={edittedTask} placeholder="Edit the" onChange={(e)=>{setEdittedTask(e.target.value)}}/>
                    <button onClick={()=>{editTask()}}>Confirm</button>
                </p>: ""}
            </div>
        
        </>
    )
}