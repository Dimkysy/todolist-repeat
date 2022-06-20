import React from 'react';
import './App.css';
import Todolist from "./Todolist";

export type TaskType = {
    id:number
    title:string
    isDone:boolean
}


function App() {

    const tasks1 = [
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"ReactJS", isDone:false}
    ]

    const tasks2 = [
        {id:1, title:"Html2", isDone:true},
        {id:2, title:"Bear", isDone:false},
        {id:3, title:"Yo", isDone:true}
    ]


    return (
        <div className="App">
           <Todolist title="first title" tasks={tasks1}/>
           <Todolist title = "What to learn" tasks={tasks2}/>
        </div>
    );
}

export default App;
