import React, {ChangeEvent, useState} from "react";
import {TaskType, FilterValuesType} from "./App";

type PropsType = {
    title:string
    tasks:Array<TaskType>
    removeTask: (taskId:string) => void
    changeFilter:(value:FilterValuesType) => void
    addTask:(title:string) => void
}

function Todolist(props:PropsType) {

    let [title, setTitle] = useState("")

    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    const onKeyPressHandler = (e:any) => {
        if (e.charCode === 13) {
            addTask()
        }
    }

    const onAllClickHandler = () => props.changeFilter("all")
    const onActiveClickHandler = () => props.changeFilter("active")
    const onCompletedClickHandler = () => props.changeFilter("completed")


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange= {onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key ={t.id}>
                    <input type ="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={() => {props.removeTask(t.id)}}>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}


export default Todolist;