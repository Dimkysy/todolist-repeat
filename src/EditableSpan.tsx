import React, {ChangeEvent, useState} from "react";

type EditableSpanProps = {
    title:string
    onChangeElem:(title:string) => void
}

function EditableSpan(props:EditableSpanProps) {

    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState("")


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    function activateEditMode () {
        setEditMode(!editMode)
        setTitle(props.title)
        props.onChangeElem(title)
    }

        return (
            editMode
            ? <input value={title} onBlur={activateEditMode} onChange={onChangeHandler} autoFocus/>
            : <span onDoubleClick={activateEditMode} onChange={onChangeHandler} >{props.title}</span>
            )

}

export default EditableSpan

