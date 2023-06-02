import React, {ChangeEvent, useState} from "react";
import { FilterValuesType } from "./App";

type TaksType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaksType>
    removeTask:(id:string) => void
    changeFilter:(value:FilterValuesType) => void
    addTask:(task:string) => void
}


export function Todolist(props: PropsType) {

 const [title, setTitle] = useState("")

  const addTaskHandler = () => {
      props.addTask(title)
      setTitle("")
  }
  const changeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
          setTitle (event.currentTarget.value)
  }
  // @ts-ignore
    const onKeyPressEnter = (event:KeyboardEvent<HTMLInputElement>) => {
     if ( event.key === "Enter") {
         addTaskHandler()
     }
  }

  const onAllClickHandler=()=> {
     props.changeFilter("all")
  }

    const onActiveClickHandler =()=> {
        props.changeFilter("active")
    }

    const onCompletedClickHandler =()=> {
        props.changeFilter("completed")
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={ changeInputHandler} onKeyPress={onKeyPressEnter} />
                <button onClick={addTaskHandler}  >+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={()=> props.removeTask(task.id)}> ✖️</button>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={onAllClickHandler} >All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )

}