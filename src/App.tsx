import React from 'react';
import './App.css';
import Tododlist from "./Todolist";

function App() {

    let task1 = [
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"Js", isDone:true},
        {id:3, title:"React", isDone:false}
    ];

    let task2 = [
        {id:1, title:"Redux", isDone:true},
        {id:2, title:"ReduxTullCit", isDone:false},
        {id:3, title:"Saga", isDone:true}
    ]


    return (
        <div>
             <Tododlist title="JS"  tasks={task1}/>
            <Tododlist title="React" tasks={task2}/>
        </div>
    );
}





export default App;
