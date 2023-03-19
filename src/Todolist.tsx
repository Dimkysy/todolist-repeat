import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from "./App";

type propsTask = {
    id:string
    title:string
    isDone:boolean
}

type propsTodolist = {
    title:string
    task:Array<propsTask>
    removeTask:(id:string) => void
    filteredTask:(filter:FilterValuesType) => void
    addTask:(title:string) => void
}


function Todolist(props:propsTodolist) {
    let [title, setTitle] = useState("Hello")

    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    // @ts-ignore
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTask()
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>

            <ul>
                {props.task.map((t) => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span><button onClick={() => props.removeTask(t.id)}>x</button>
                        </li>
                    )
                })}
            </ul>

            <div>
                <button onClick={()=> props.filteredTask("all")} >All</button>
                <button onClick={()=> props.filteredTask("active")}>Active</button>
                <button onClick={()=> props.filteredTask("complited")}>Completed</button>
            </div>
        </div>
    )
}


export default Todolist