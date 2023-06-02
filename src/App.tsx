import React, {useState} from 'react';
import './App.css';
import {Todolist, TaksType} from "./Todolist";
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed"

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key:string]:Array<TaksType>
}


function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolist] = useState<Array<TodolistType>>(
        [
            {id: todolistId1, title: "What to learn", filter: "all"},
            {id: todolistId2, title: "What to buy", filter: "all"},
        ]
    )

    let [tasks, setTasks] = useState <TasksStateType> ({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "Bead", isDone: true},
            {id: v1(), title: "Milk", isDone: false},
        ]
    })


    function removeTask(id: string, todolistId:string) {

        let todolistTasks = tasks[todolistId]

        tasks[todolistId] = todolistTasks.filter(task => task.id !== id)
        setTasks({...tasks})
    }



    function changeFilter(value: FilterValuesType, todolistId:string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if(todolist) {
            todolist.filter = value
            setTodolist([...todolists])
        }
    }

    function addTask(title: string, todolistId:string) {

        const newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        let todolistTasks = tasks[todolistId]

        tasks[todolistId] = [newTask, ...todolistTasks]

        setTasks({...tasks})
    }

    function changeTaskStatus(id: string, isDone: boolean, todolistId:string) {
        let todolistTasks = tasks[todolistId]

        let task = todolistTasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
        }
        setTasks({...tasks})
    }

    function removeTodolist (id:string) {
        setTodolist(todolists.filter(todolist => todolist.id !== id))

        delete tasks[id]

        setTasks({...tasks})
    }

    return (
        <div className="App">
            {
                todolists.map(todolist => {
                    let allTodolistTasks = tasks[todolist.id]
                    let taskForTodolist = allTodolistTasks


                    if (todolist.filter === "active") {
                        taskForTodolist = allTodolistTasks.filter(task => task.isDone === false)
                    }

                    if (todolist.filter === "completed") {
                        taskForTodolist = allTodolistTasks.filter(task => task.isDone === true)
                    }

                    return (
                        <Todolist
                            title={todolist.title}
                            tasks={taskForTodolist}
                            key={todolist.id}
                            id={todolist.id}
                            filter={todolist.filter}

                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeTaskStatus}
                            removeTodolist ={removeTodolist}
                        />
                    )
                })
            }
        </div>

    );
}


export default App;
