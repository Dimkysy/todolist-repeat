import React, {ChangeEvent, useState} from 'react';
import Button from '@mui/material/Button';


type AddItemFormProps = {
     addItem:(title:string) => void
}


const AddItemForm = (props: AddItemFormProps) => {

    let [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    // @ts-ignore
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === "Enter") {
            addItem()
        }
    }

    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <Button variant="contained"
                    color = 'primary'
                    style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}

                    onClick={addItem}>+</Button>
            {error && <div className={"error-message"}>{error}</div>}
        </div>
    )
}


export default AddItemForm