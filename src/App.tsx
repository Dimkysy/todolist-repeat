import React, {useState} from 'react';
import './App.css';
import Todolist from './Todolist';

function App() {

    let [tasks, setTasks] = useState([
        {id:1, title:"HTML & CSS", isDone:true},
        {id:2, title:"JS", isDone:false},
        {id:3, title:"Reactjs", isDone:true},
    ])

    function removeTask(id:number) {
        let fileteredTasks = tasks.filter(t => t.id != id)
        setTasks(fileteredTasks)
    }


    return (
        <div className="App">
           <Todolist
               title ="What the title"
               tasks={tasks}
               removeTask={removeTask}
           />
        </div>
    );
}

export default App;
