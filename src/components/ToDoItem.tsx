import React from "react";

function ToDoItem(props: any) {
    return (
        <div className="listOfItems" onClick={props.onClick}>
            <li>{props.text}</li>
        </div>
    );
}

export default ToDoItem;
