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
    filter:FilterValuesType
    removeTask:(id:string) => void
    filteredTask:(filter:FilterValuesType) => void
    addTask:(title:string) => void
    changeTaskStatus:(id:string, isDone:boolean) => void
}


function Todolist(props:propsTodolist) {
    let [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if(title.trim() !== "") {
            props.addTask(title.trim())
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
            <h3>{props.title}</h3>
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
                    const onClickHandler = () => {props.removeTask(t.id)}
                    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(t.id, newIsDoneValue)
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
                    onClick={()=> props.filteredTask("all")} >All</button>
                <button className={props.filter === "active" ? "active-filter" : ""}
                    onClick={()=> props.filteredTask("active")}>Active</button>
                <button className={props.filter === "complited" ? "active-filter" : ""}
                    onClick={()=> props.filteredTask("complited")}>Completed</button>
            </div>
        </div>
    )
}


export default Todolist