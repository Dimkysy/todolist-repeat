import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed"


function App() {

    let [tasks, setTasks] = useState([
        {id: 1, isDone: false, title: "React"},
        {id: 2, isDone: true, title: "Angular"},
        {id: 3, isDone: false, title: "Vue"}
    ])


    function removeTask(id: number) {
        let filteredTask = tasks.filter(t => t.id != id)
        setTasks(filteredTask)
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

            />
        </div>
    );
}

export default App;
