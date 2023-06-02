import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import { v1 } from 'uuid';

export type FilterValuesType = "all"| "active" | "completed"

function App() {

    const [tasks, setTasks] = useState([
            {id: v1() , title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false},])


    let [filter, setFilter] = useState("all")

    function removeTask(id: string) {
        let newTasks = []
        newTasks = tasks.filter(t => t.id !== id)
        setTasks(newTasks)
    }

    let taskForTodolist = tasks

    if (filter === "active") {
       taskForTodolist = tasks.filter(task => task.isDone === false)
    }

    if (filter === "completed") {
        taskForTodolist = tasks.filter(task => task.isDone === true)
    }

    function changeFilter(value:FilterValuesType) {
        setFilter(value)
    }

    function addTask(task:string) {
        const newTask = {
            id:v1(),
            title:task,
            isDone:false
        }
        setTasks([newTask ,...tasks])

    }

    return (
        <div className="App">
            <Todolist title="What to lear"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>

    );
}


export default App;
