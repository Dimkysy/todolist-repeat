import React, {ChangeEvent, useState} from "react";
import { FilterValuesType } from "./App";

type TaskType = {
    id:string
    title:string
    isDone:boolean
}

type PropsType = {
    title:string
    tasks:Array<TaskType>
    removeTask:(id:string) => void
    changeFilter:(value:FilterValuesType) => void
    addTask:(title:string) => void
}

export function Todolist(props:PropsType) {

    let [title, setTitle] = useState("")

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    // @ts-ignore
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask()
        }
    }

    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value = {title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTask}>+</button>
            </div>


            <ul>
                {props.tasks.map((task)=> {
                    return (
                        <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                            <button onClick={ () => props.removeTask(task.id)}>x</button>
                        </li>
                    )
                })}
            </ul>

            <div>
                <button onClick={()=> props.changeFilter("all")}>All</button>
                <button onClick={()=> props.changeFilter("active")}>Active</button>
                <button onClick={() => props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    )
}