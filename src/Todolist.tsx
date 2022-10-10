import React from "react";
import { FilterVluesType } from "./App";


type TaskType = {
    id:number
    title:string
    isDone:boolean
}
type PropsType = {
    title:string
    tasks:Array<TaskType>
    removeTask : (id:number) => void
    chengeFilter:(value:FilterVluesType) => void
}

function Tododlist(props:PropsType) {


    return  (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map (t=>
                        <li key ={t.id}>
                            <input type={"checkbox"} checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button
                                type="button"
                                className="buttonRemove"
                                onClick={() => {props.removeTask(t.id)}}>
                                x
                            </button>
                        </li>)}
                </ul>
                <div>
                    <button onClick={() => props.chengeFilter("all")} >All</button>
                    <button  onClick={() => props.chengeFilter("active")} >Active</button>
                    <button onClick={()=> props.chengeFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>

    )
}

export default Tododlist