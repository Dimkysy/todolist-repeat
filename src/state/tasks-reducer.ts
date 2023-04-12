import {TasksStateType} from "../App";
import {v1} from "uuid";

type ActionType = RemoveTask | AddTask | ChangeTaskStatus | ChangeTaskTitle

export type  RemoveTask = {
    type:'REMOVE-TASK',
    todolistId : string
    taskId:string
}

export type AddTask = {
    type:'ADD-TASK',
    todolistId:string
    title:string
}

export type ChangeTaskStatus = {
    type:'CHANGE-TASK-STATUS',
    todolistId: string
    taskId: string
    isDone: boolean
}

export type ChangeTaskTitle = {
    type:'CHANGE-TASK-TITLE',
    todolistId: string
    taskId: string
    title: string
}


export const tasksReducer = (state:TasksStateType, action:ActionType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let newState = {...state}
            let todolistTasks = newState[action.todolistId]
            newState[action.todolistId] = todolistTasks.filter(task => task.id !== action.taskId)
            return newState
        }
        case 'ADD-TASK': {
            let newState = {...state}

            let newTask = {
                id:v1(),
                title:action.title,
                isDone:false
            }
            let todolistTasks = newState[action.todolistId]
            newState[action.todolistId] = [newTask, ...todolistTasks]
            return newState
        }

        case 'CHANGE-TASK-STATUS': {
            let newState = {...state}
            let todolistTasks = newState[action.todolistId]

            let task =  todolistTasks.find(t => t.id === action.taskId)
            if(task) {
                task.isDone = action.isDone
                return newState
            }
            return newState
        }


        case 'CHANGE-TASK-TITLE': {
            let newState = {...state}
            let todolistTasks = newState[action.todolistId]

            let task =  todolistTasks.find(t => t.id === action.taskId)
            if(task) {
                task.title = action.title
                return newState
            }
            return newState
        }
    }
}


export const removeTaskAC = (todolistId:string,taskId:string):RemoveTask => {
    return {type:'REMOVE-TASK', todolistId:todolistId, taskId:taskId}
}

export const addTaskAC = (todolistId:string, title:string):AddTask => {
    return {type:'ADD-TASK', todolistId, title}
}

export const changeTaskStatusAC = (todolistId:string, taskId:string, isDone:boolean):ChangeTaskStatus => {
    return {type:'CHANGE-TASK-STATUS', todolistId, taskId, isDone}
}


export const changeTaskTitleAC = (todolistId:string, taskId:string, title:string):ChangeTaskTitle => {
    return {type:'CHANGE-TASK-TITLE', todolistId, taskId, title}
}