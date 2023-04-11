import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType


export type RemoveTodolistActionType = {
    type:'REMOVE-TODOLIST',
    id:string
}

export type AddTodolistActionType = {
    type:'ADD-TODOLIST',
    title:string
}

export type ChangeTodolistTitleActionType = {
    type:'CHANGE-TODOLIST-TITLE',
    id:string
    title:string
}

export type ChangeTodolistFilterActionType = {
    type:'CHANGE-TODOLIST-FILTER',
    id:string
    filter:FilterValuesType
}


export const todolisReducer = (state:Array<TodolistType>,action:ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            let newState =  [...state.filter(todolist => todolist.id !== action.id)]
            return newState
        }

        case 'ADD-TODOLIST': {
            let newTodolistsId = v1()
            let newTodolist: TodolistType = {id: newTodolistsId, title: action.title, filter: "all"}
            let newState = [...state,newTodolist]
            return newState
        }

        case 'CHANGE-TODOLIST-TITLE': {
            let newState = [...state]

            let task = newState.find(t => t.id === action.id)
            if (task) {
                task.title = action.title
                return newState
            }
            return newState

        }

        case 'CHANGE-TODOLIST-FILTER': {
            let newState = [...state]
            let todolist = newState.find(tl => tl.id === action.id )
            if (todolist) {
                todolist.filter = action.filter
                return newState
            }
            return newState
        }

        default:
            throw  new  Error("Error")
    }
}


export const RemoveTodolistAC = (todolistId:string) :RemoveTodolistActionType => {
    return {type:'REMOVE-TODOLIST', id:todolistId}
}

export const AddTodolistAC = (title:string): AddTodolistActionType => {
    return {type:'ADD-TODOLIST', title}
}

export const ChangeTodolistTitleAC = (todolistId:string, title:string): ChangeTodolistTitleActionType => {
    return {type:'CHANGE-TODOLIST-TITLE', id:todolistId, title:title}
}

export const ChangeTodolistFilterAC = (todolistId:string,filter:FilterValuesType ):ChangeTodolistFilterActionType => {
    return {type:'CHANGE-TODOLIST-FILTER', id:todolistId, filter:filter}
}