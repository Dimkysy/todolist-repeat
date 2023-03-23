import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";
import {v1} from 'uuid';


export type FilterValuesType = "all" | "active" | "complited"

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key:string]:Array<TaskType>
}

function App() {



    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: "What to learn", filter: "all"},
        {id: todolistID2, title: "What to buy", filter: "all"},
    ])


    let [tasks, setTask] = useState<TasksStateType>({
        [todolistID1]: [
            {id: v1(), title: "Html&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false},
            {id: v1(), title: "ReactJS", isDone: true},
        ],
        [todolistID2] : [
            {id: v1(), title: "Beaarr", isDone: false},
            {id: v1(), title: "Hello", isDone: true},
            {id: v1(), title: "Hi you Hi", isDone: false},
        ]
    })

    function removeTask(id: string, todolistId:string) {

        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(task => task.id !== id)
        setTask({...tasks})
    }

    function removeTodolist(id:string) {
        setTodolists(todolists.filter(todolist => todolist.id !== id))
        delete tasks[id]

        setTask({...tasks})
    }

    function addTask(title: string, todolistId:string) {

        let newTask = {
            id: v1(),
            title: title,
            isDone: false,
        }
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [newTask, ...todolistTasks]
        setTask({...tasks})

    }


    function filteredTask(filter: FilterValuesType, todolistId:string) {
        let todilist = todolists.find(tl => tl.id === todolistId)
        if (todilist) {
            todilist.filter = filter
            setTodolists([...todolists])
        }
    }

    function changeTaskStatus(id: string, isDone: boolean, todolistId:string) {
        let todolistTasks = tasks[todolistId]

        let task = todolistTasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTask({...tasks})
        }
    }



    return (
        <div className="App">
            {
                todolists.map(todolist => {

                    let allTodolistsTasks = tasks[todolist.id]
                    let taskForTodolist = allTodolistsTasks

                    if (todolist.filter === "active") {
                        taskForTodolist = allTodolistsTasks.filter(t => t.isDone == false)
                    }
                    if (todolist.filter === "complited") {
                        taskForTodolist = allTodolistsTasks.filter(t => t.isDone == true)
                    }

                    return <Todolist
                        title={todolist.title}
                        task={taskForTodolist}
                        filter={todolist.filter}
                        id={todolist.id}
                        key={todolist.id}

                        removeTask={removeTask}
                        filteredTask={filteredTask}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        removeTodolist = {removeTodolist}
                    />
                })
            }
        </div>
    );
}


export default App;
