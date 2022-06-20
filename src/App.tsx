import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";
import {v1} from "uuid";
import set = Reflect.set;

export type TaskType = {
    id:string
    title:string
    isDone:boolean
}

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id:v1(), title:"HTML&CSS", isDone:true},
        {id:v1(), title:"JS", isDone:true},
        {id:v1(), title:"ReactJS", isDone:false},
        {id:v1(), title:"LessonTD", isDone:false},
        {id:v1(), title:"New", isDone:false},
    ])


    function removeTask(id:string) {
      let filteredTasks = tasks.filter(t =>  t.id != id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState <FilterValuesType> ("all")

    let tasksForTodolist = tasks;

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
        let  newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    return (
        <div className="App">
           <Todolist title="first title"
                     tasks={tasksForTodolist}
                     removeTask = {removeTask}
                     changeFilter = {changeFilter}
                     addTask = {addTask}
           />
        </div>
    );
}

export default App;
