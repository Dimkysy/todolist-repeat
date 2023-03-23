import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";
import { v1 } from 'uuid';


export type FilterValuesType = "all" | "active" | "complited"

function App() {

    let [tasks, setTask] = useState([
        {id: v1(), title: "Html&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: true},
        {id: v1(), title: "Beaarr", isDone: false},
        {id: v1(), title: "Hello", isDone: true},
        {id: v1(), title: "Hi you Hi", isDone: false},
    ])

    let [filter, setFilter] = useState<FilterValuesType>("all")
    let taskForTodolist = tasks


    function removeTask(id:string) {
        let newTask = tasks.filter(t => t.id !== id)
        setTask(newTask)
    }

    function addTask(title:string) {

        let newTask = {
            id:v1(),
            title:title,
            isDone:false,
        }
        setTask([newTask, ...tasks])

    }

    if (filter === "active") {
        taskForTodolist = tasks.filter(t => t.isDone == false )
    }
    if (filter === "complited") {
        taskForTodolist = tasks.filter(t => t.isDone == true)
    }
    function filteredTask(filter:FilterValuesType) {
        setFilter(filter)
    }

    function changeTaskStatus(id:string, isDone:boolean) {
        let task = tasks.find(t => t.id === id)
        if(task) {
            task.isDone = isDone
            setTask([...tasks])
        }
    }


    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      task = {taskForTodolist}
                      removeTask = {removeTask}
                      filteredTask = {filteredTask}
                      addTask = {addTask}
                      changeTaskStatus = {changeTaskStatus}
                      filter = {filter}
            />
        </div>
    );
}

export default App;
