import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed"


function App() {

   let [tasks, setTasks] = useState([
       {id:v1(), title:"Html&Css", isDone:true},
       {id:v1(), title: "Js", isDone: true},
       {id:v1(), title: "ReactJs", isDone: false},
   ])

    function removeTask(id:string) {
        let fileterdTasks = tasks.filter(t => t.id != id)
       setTasks(fileterdTasks)
    }

    let [filter, setFilter] = useState <FilterValuesType>("all")

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
        let task = {id: v1(), title:title, isDone:false}
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }



    return (
        <div className="App">
           <Todolist
               title = "What to learn"
               tasks = {tasksForTodolist}
               removeTask = {removeTask}
               changeFilter = {changeFilter}
               addTask = {addTask}
           />
        </div>
    );

}

export default App;
