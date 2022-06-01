import React from 'react';
import './App.css';
import Todolist from './Todolist';

function App() {

    const tasks1 = [
        {id:1, title:"HTML & CSS", isDone:true},
        {id:2, title:"JS", isDone:false},
        {id:3, title:"Reactjs", isDone:true},
    ]


    return (
        <div className="App">
           <Todolist title ="What the title" tasks={tasks1}  />
        </div>
    );
}

export default App;
