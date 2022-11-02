import React from "react";
import {filterValuesType, TaskType} from "./App";
import './App.css';

type PropsType = {
    title:string
    tasks:Array<TaskType>
    removeTasks:(id:string) => void
    changeFilter:(value:filterValuesType) => void
}


export  function Todolist(props:PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button className="removeButton"  onClick={()=> props.removeTasks(t.id)} >x</button>
                    </li>
                    )
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