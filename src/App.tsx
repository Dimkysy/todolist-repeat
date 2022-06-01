import React from 'react';
import './App.css';
import Todolist from './Todolist';

function App() {

    const tasks1 = [
        {id:1, title:"HTML & CSS", isDone:true},
        {id:2, title:"JS", isDone:false},
        {id:3, title:"Reactjs", isDone:true},
    ]

    const tasks2 = [
        {id:1, title:"Hello world", isDone:true},
        {id:2, title:"Happy hacking ", isDone:false},
        {id:3, title:"Yo", isDone:true},
    ]

    return (
        <div className="App">
           <Todolist title ="What the title" tasks={tasks1}  />
           <Todolist title ="I title" tasks={tasks2} />
        </div>
    );
}

export default App;
