import React, {useState} from 'react';
import './App.css';
import Todolist from './Todolist';
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id:v1(), title:"HTML & CSS", isDone:true},
        {id:v1(), title:"JS", isDone:false},
        {id:v1(), title:"Reactjs", isDone:true},
    ])

    function removeTask(id:string) {
        let fileteredTasks = tasks.filter(t => t.id != id)
        setTasks(fileteredTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    function changeFilter(value:FilterValuesType) {
        setFilter(value)
    }

    function addTask(title:string) {
        let task = {id:v1(), title:title, isDone:false}
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    return (
        <div className="App">
           <Todolist
               title ="What the title"
               tasks={tasksForTodolist}
               removeTask={removeTask}
               changeFilter = {changeFilter}
               addTask = {addTask}
           />
        </div>
    );
}

export default App;
