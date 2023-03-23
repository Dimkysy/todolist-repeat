import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from "./App";

export type TaskType = {
    id:string
    title:string
    isDone:boolean
}

type propsTodolist = {
    title:string
    task:Array<TaskType>
    filter:FilterValuesType
    id:string
    removeTask:(id:string,todolistId:string) => void
    filteredTask:(filter:FilterValuesType,todolistId:string) => void
    addTask:(title:string,todolistId:string) => void
    changeTaskStatus:(id:string, isDone:boolean,todolistId:string) => void
    removeTodolist:(id:string)=> void
}


function Todolist(props:propsTodolist) {
    let [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if(title.trim() !== "") {
            props.addTask(title.trim(),props.id)
            setTitle("")
        }
        else {
            setError("Title is required")
        }
    }

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    // @ts-ignore
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === "Enter") {
            addTask()
        }
    }

    return (
        <div>
            <h3>{props.title}
                <button onClick={ () =>  props.removeTodolist(props.id)} >x</button>
            </h3>

            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
                {error && <div className={"error-message"}>{error}</div>}
            </div>

            <ul>
                {props.task.map((t) => {
                    const onClickHandler = () => {props.removeTask(t.id, props.id)}
                    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id)
                    }

                    return (
                        <li key={t.id} className={t.isDone ?"is-done": ""}>
                            <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
                            <span>{t.title}</span><button onClick={onClickHandler}>x</button>
                        </li>
                    )
                })}
            </ul>

            <div>
                <button className={props.filter === "all" ? "active-filter" : ""}
                    onClick={()=> props.filteredTask("all", props.id)} >All</button>
                <button className={props.filter === "active" ? "active-filter" : ""}
                    onClick={()=> props.filteredTask("active", props.id)}>Active</button>
                <button className={props.filter === "complited" ? "active-filter" : ""}
                    onClick={()=> props.filteredTask("complited", props.id)}>Completed</button>
            </div>
        </div>
    )
}


export default Todolist