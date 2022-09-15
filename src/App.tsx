import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


function App() {

    const tasks1 = [
        {id:1, isDone:false, title:"React"},
        {id:2, isDone: true, title: "Angular"},
        {id:3, isDone: false, title: "Vue"}
    ]

    const tasks2 = [
        {id:1, isDone:true, title:"JS"},
        {id:2, isDone: false, title: "CSS"},
        {id:3, isDone: true, title: "HTML"}
    ]

    return (
        <div className="App">
            <Todolist
                title ="Hello world"
                tasks = {tasks1}

            />
            <Todolist
                title ="Bear"
                tasks = {tasks2}
            />
        </div>
    );
}

    export default App;
