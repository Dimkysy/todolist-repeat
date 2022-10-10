import React, {useState} from 'react';
import './App.css';
import Tododlist from "./Todolist";

export type FilterVluesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"Js", isDone:true},
        {id:3, title:"React", isDone:false}
    ])

    function removeTask(id:number) {
     let filteredTask = tasks.filter(t => t.id != id)
         setTasks(filteredTask);
    }

    let [filter, setFilter] = useState<FilterVluesType>("all")

    let taskForTodolist = tasks;

    if (filter === "active") {
        taskForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }

    function chengeFilter(value:FilterVluesType) {
        setFilter(value)
    }

    return (
        <div>
             <Tododlist
                 title="JS"
                 tasks={taskForTodolist}
                 removeTask={removeTask}
                 chengeFilter={chengeFilter}/>
        </div>
    );
}


export default App;
