import React, {ChangeEvent, useState} from "react";
import {filterValuesType, TaskType} from "./App";
import './App.css';

type PropsType = {
    title:string
    tasks:Array<TaskType>
    removeTasks:(id:string) => void
    changeFilter:(value:filterValuesType) => void
    addTasks:(title:string) => void
}


export  function Todolist(props:PropsType) {


    let [title, setTitle] = useState("")

    let addTask = () => {
        props.addTasks(title)
        setTitle("")
    }

    let onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    // @ts-ignore
    let onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
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
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        let onClickHandler = () => props.removeTasks(t.id)
                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button className="removeButton"  onClick={onClickHandler} >x</button>
                            </li>
                        )
                    })
                }

            </ul>
            <div>
                <button onClick={()=> props.changeFilter("all")} >All</button>
                <button onClick={() => props.changeFilter("active")}>Active</button>
                <button onClick={()=> props.changeFilter("complited")}>Completed</button>
            </div>
        </div>
    )
}