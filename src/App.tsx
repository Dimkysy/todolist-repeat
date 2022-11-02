import React from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
    id:number
    title:string
    isDone:boolean
}

function App() {

    let tasks:Array<TaskType> = [
        {id:1, title:"HTML&CSS",isDone:false},
        {id:2, title:"JS", isDone:false},
        {id:3, title:"React", isDone:true},
    ]

    return (
        <div className="App">
            <Todolist title = "Hello" tasks={tasks}/>
        </div>
    );
}

export default App;
