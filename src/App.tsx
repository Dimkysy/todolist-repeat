import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id:v1(), title:"HTML CSS", isDone:true},
        {id:v1(), title: "JS", isDone: false},
        {id:v1(), title: "React", isDone: false},
    ])

    let [filter, setFilter] = useState<FilterValuesType>("all")
    let tasksForTodolist = tasks

    function removeTask(id:string) {
        let newTasks = tasks.filter(t => t.id !== id)
        setTasks(newTasks)
    }

    function addTask(title:string) {
        let newTask = {
            id:v1(),
            title:title,
            isDone:false,
        }
        setTasks([newTask, ...tasks])
    }

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    function changeFilter(value:FilterValuesType) {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist
                title={"What to learn"}
                tasks = {tasksForTodolist}
                removeTask = {removeTask}
                changeFilter = {changeFilter}
                addTask = {addTask}
            />
        </div>
    );
}


export default App;
