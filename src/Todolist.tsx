import React from 'react';
import {FilterValuesType} from "./App";

type propsTask = {
    id:number
    title:string
    isDone:boolean
}

type propsTodolist = {
    title:string
    task:Array<propsTask>
    removeTask:(id:number) => void
    filteredTask:(filter:FilterValuesType) => void
}


function Todolist(props:propsTodolist) {
    debugger

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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