import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from "./App";
import AddItemForm from './AddItemForm';
import IconButton from '@mui/material/IconButton';
import EditableSpan from './EditableSpan';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export type TaskType = {
    id:string
    title:string
    isDone:boolean
}

type propsTodolist = {
    title:string
    task:Array<TaskType>
    filter:FilterValuesType
    id:string
    removeTask:(id:string,todolistId:string) => void
    filteredTask:(filter:FilterValuesType,todolistId:string) => void
    addTask:(title:string,todolistId:string) => void
    changeTaskStatus:(id:string, isDone:boolean,todolistId:string) => void
    removeTodolist:(id:string)=> void
    onChangeSpan:(todolistId:string, id:string, title:string) => void
    onChangeTitle:(todolistId:string, title:string) => void
}


function Todolist(props:propsTodolist) {

    const addTask = (title:string) => {
        props.addTask(title, props.id)
    }
    const onChangeTitle = (title:string) => {
        props.onChangeTitle(props.id, title )
    }

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} onChangeElem={onChangeTitle}/>
                <IconButton  aria-label="delete" onClick={ () =>  props.removeTodolist(props.id)} >  <DeleteIcon /> </IconButton>

            </h3>

            <AddItemForm addItem = {addTask}/>

            <ul>
                {props.task.map((t) => {
                    const onClickHandler = () => {props.removeTask(t.id, props.id)}
                    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id)
                    }
                    const onChangeSpan = (title:string) => {
                        props.onChangeSpan(props.id,t.id, title )
                    }

                    return (
                        <li key={t.id} className={t.isDone ?"is-done": ""}>
                            <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
                            <EditableSpan title ={t.title} onChangeElem={onChangeSpan}/>
                            <IconButton  aria-label="delete" onClick={onClickHandler} >  <DeleteIcon /> </IconButton>
                        </li>
                    )
                })}
            </ul>

            <div>
                <Button color ="inherit"
                    variant={props.filter === "all" ? "outlined" : "text"}
                    onClick={()=> props.filteredTask("all", props.id)} >All</Button>
                <Button color ="primary"
                    variant={props.filter === "active" ? "outlined" : "text"}
                    onClick={()=> props.filteredTask("active", props.id)}>Active</Button>
                <Button color ="secondary"
                    variant={props.filter === "complited" ? "outlined" : "text"}
                    onClick={()=> props.filteredTask("complited", props.id)}>Completed</Button>
            </div>
        </div>
    )
}


export default Todolist