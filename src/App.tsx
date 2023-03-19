import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";
import { v1 } from 'uuid';


export type FilterValuesType = "all" | "active" | "complited"

function App() {

    let [task, setTask] = useState([
        {id: v1(), title: "Html&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: true}
    ])

    let [filter, setFilter] = useState<FilterValuesType>("all")
    let taskForTodolist = task


    function removeTask(id:string) {
        let newTask = task.filter(t => t.id !== id)
        setTask(newTask)
    }

    function addTask(title:string) {

        let newTask = {
            id:v1(),
            title:title,
            isDone:false,
        }
        setTask([newTask, ...task])

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
                      addTask = {addTask}
            />
        </div>
    );
}

export default App;
