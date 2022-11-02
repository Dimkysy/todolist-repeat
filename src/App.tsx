import React, {useState} from 'react';
import './App.css';
import { Todolist } from './Todolist';
import {v1} from "uuid";

export type filterValuesType = "all" | "active" | "complited"

export type TaskType = {
    id:string
    title:string
    isDone:boolean
}

function App() {

    let [tasks, setTasks] = useState([
        {id:v1(), title:"HTML&CSS",isDone:false},
        {id:v1(), title:"JS", isDone:false},
        {id:v1(), title:"React", isDone:true},
    ])

    let [filter, setFilter] = useState<filterValuesType>("all")

    let removeTasks =  (id:string) =>   {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    let addTasks = (title:string) => {
        let task = {id:v1(), title:title, isDone:false}
        setTasks([task, ...tasks])
    }

    let tasksForTodolist = tasks


    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false )
    }

    if (filter === "complited") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    function changeFilter(value:filterValuesType) {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist title = "Hello"
                      tasks={tasksForTodolist}
                      removeTasks = {removeTasks}
                      changeFilter = {changeFilter}
                      addTasks = {addTasks}
            />
        </div>
    );
}

export default App;
