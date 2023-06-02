import React, {ChangeEvent, useState} from "react";
import { FilterValuesType } from "./App";

export type TaksType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaksType>
    filter:string
    id:string

    removeTask:(id:string,todolistId:string) => void
    changeFilter:(value:FilterValuesType,id:string) => void
    addTask:(task:string, todolistId:string) => void
    changeTaskStatus:(id:string, isDone:boolean, todolistId:string)=> void
    removeTodolist:(id:string) => void
}


export function Todolist(props: PropsType) {

 const [title, setTitle] = useState("")
 const [error,setErorr] = useState<string | null >(null)


  const addTaskHandler = () => {

     if (title.trim() !== "") {
         props.addTask(title, props.id)
         setTitle("")
     } else {
         setErorr('Title is required')
     }
  }
  const changeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
          setTitle (event.currentTarget.value)
  }
  // @ts-ignore
    const onKeyPressEnter = (event:KeyboardEvent<HTMLInputElement>) => {
        setErorr(null)

     if ( event.key === "Enter") {
         addTaskHandler()
     }
  }

  const onAllClickHandler=()=> {
     props.changeFilter("all", props.id)
  }

    const onActiveClickHandler =()=> {
        props.changeFilter("active", props.id)
    }

    const onCompletedClickHandler =()=> {
        props.changeFilter("completed", props.id)
    }

    return (
        <div>
            <h3>{props.title}
                <button onClick={()=> props.removeTodolist(props.id)}>✖</button>
            </h3>
            <div>
                <input value={title} onChange={ changeInputHandler} onKeyPress={onKeyPressEnter} />
                <button onClick={addTaskHandler}  >+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {props.tasks.map((task) => {

                    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(task.id,newIsDoneValue, props.id)
                    }

                    return (
                        <li key={task.id} className={task.isDone ? "is-done":""} >
                            <input type="checkbox" checked={task.isDone} onChange={onChangeHandler} />
                            <span>{task.title}</span>
                            <button onClick={()=> props.removeTask(task.id, props.id)}> ✖️</button>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button className={props.filter === 'all' ? 'filterActive' :''} onClick={onAllClickHandler} >All</button>
                <button className={props.filter === 'active' ? 'filterActive' :''} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? 'filterActive' :''} onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )

}