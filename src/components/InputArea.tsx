import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToDoItem } from "../models";
import { addItem } from "../redux/todoreducer";

export default function InputArea() {
    const [inputText, setInputText] = useState<ToDoItem>("");
    const dispatch = useDispatch();

    function handleChange(event: any) {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button
                onClick={() => {
                    if (inputText) {
                        dispatch(addItem(inputText));
                        setInputText("");
                    }
                }}
            >
                <span>Add</span>
            </button>
        </div>
    );
}
