import React, {ChangeEvent, useState} from "react";
import {filterValuesType, TaskType} from "./App";
import './App.css';

type PropsType = {
    title:string
    tasks:Array<TaskType>
    removeTasks:(id:string) => void
    changeFilter:(value:filterValuesType) => void
    addTasks:(title:string) => void
    filter:filterValuesType
    changeTaskStatus:(id:string, isDone:boolean) => void
}


export  function Todolist(props:PropsType) {


    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    let addTask = () => {
        if (title.trim() !== "") {
            props.addTasks(title)
            setTitle("")
        }
        else {
            setError("Title is requared")
        }
    }

    let onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    // @ts-ignore
    let onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value = {title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask} >+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        let onClickHandler = () => props.removeTasks(t.id)
                        let onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked
                            props.changeTaskStatus(t.id, newIsDoneValue)
                        }
                        return (
                            <li key={t.id} className={t.isDone ? "is-done" : ""}>
                                <input type="checkbox" checked={t.isDone} onChange={onChangeHandler} />
                                <span>{t.title}</span>
                                <button className="removeButton"  onClick={onClickHandler} >x</button>
                            </li>
                        )
                    })
                }

            </ul>
            <div>
                <button className={props.filter === "all" ? "active-filrer":""}  onClick={()=> props.changeFilter("all")} >All</button>
                <button className={props.filter === "active" ? "active-filrer":""} onClick={() => props.changeFilter("active")}>Active</button>
                <button className={props.filter === "complited" ? "active-filrer":""} onClick={()=> props.changeFilter("complited")}>Completed</button>
            </div>
        </div>
    )
}