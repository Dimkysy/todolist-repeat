import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';
import {IconButton} from "@mui/material";
import {AddBox} from "@mui/icons-material";


type AddItemFormProps = {
    addItem: (title: string) => void
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

            <TextField id="standard-basic" label="Title" variant="standard"
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       error={!!error}
                       helperText={error}
            />

            <IconButton
                    color='primary'
                    onClick={addItem}>
                <AddBox/>
            </IconButton>
        </div>
    )
}


export default AddItemForm