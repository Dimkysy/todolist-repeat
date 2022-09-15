import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed"


function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), isDone: false, title: "React"},
        {id: v1(), isDone: true, title: "Angular"},
        {id: v1(), isDone: false, title: "Vue"}
    ])


    function removeTask(id: string) {
        let filteredTask = tasks.filter(t => t.id != id)
        setTasks(filteredTask)
    }

    function addTask(title:string) {
        let task = {id:v1(), isDone:false, title:title}
        let newTasks = [...tasks, task]
        setTasks(newTasks)
    }

    function changeTaskStatus(id:string, isDone:boolean) {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTasks([...tasks])
        }
    }



    function changeFilter(value:FilterValuesType) {

        setFilter(value)
    }

    let taskForTodolist = tasks;

    let [filter, setFilter] = useState<FilterValuesType>("all")


    if(filter === "active") {

        taskForTodolist = tasks.filter(t => t.isDone === false )
    }

    if (filter === "completed") {
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }


    return (
        <div className="App">
            <Todolist
                title="Hello world"
                tasks={taskForTodolist}
                removeTask={removeTask}
                changeFilter = {changeFilter}
                addTask = {addTask}
                changeTaskStatus = {changeTaskStatus}
                filter = {filter}
            />
        </div>
    );
}

export default App;
