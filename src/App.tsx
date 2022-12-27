import React from "react";

import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "./redux/todoreducer";

export default function App() {
    const items = useSelector((state: any) => state.todos.listOfItems);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>To-Do List</h1>
                </div>
                <InputArea />
                <ul>
                    {items.map((todoItem: string, index: number) => (
                        <ToDoItem
                            key={index}
                            text={todoItem}
                            onClick={() => dispatch(deleteItem(index))}
                        />
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
}
