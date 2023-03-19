import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";


export type FilterValuesType = "all" | "active" | "complited"

function App() {

    let [task, setTask] = useState([
        {id: 1, title: "Html&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "ReactJS", isDone: true}
    ])

    let [filter, setFilter] = useState<FilterValuesType>("all")
    let taskForTodolist = task


    function removeTask(id:number) {
        let newTask = task.filter(t => t.id !== id)
        setTask(newTask)
    }

    if (filter === "active") {
        taskForTodolist = task.filter(t => t.isDone == false )
    }
    if (filter === "complited") {
        taskForTodolist = task.filter(t => t.isDone == true)
    }
    function filteredTask(filter:FilterValuesType) {
        setFilter(filter)
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      task = {taskForTodolist}
                      removeTask = {removeTask}
                      filteredTask = {filteredTask}
            />
        </div>
    );
}

export default App;
