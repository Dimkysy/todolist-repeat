import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {

let task = [
    {id:1, title:"Html&CSS", isDone:true},
    {id:2, title: "JS", isDone: false},
    {id:3, title: "ReactJS", isDone: true}
]

    return (
        <div className="App">
            <Todolist title={"What to learn"} task = {task}/>
        </div>
    );
}

export default App;
