import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const tasks1 = [
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"React", isDone:false},
        {id:4, title:"Redux", isDone:false},
    ]

    const tasks2 = [
        {id:1, title:"Milk", isDone:false},
        {id:2, title: "Juice", isDone: true},
        {id:3, title: "Dumplings", isDone: true}
    ]

    return (
        <div className="App">
          <Todolist title = "What to lear" tasks = {tasks1} />
          <Todolist title="Songs" tasks = {tasks2}/>
        </div>

    );
}


export default App;
