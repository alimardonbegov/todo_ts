import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listOfItems: [],
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addItem: (state: any, action: any) => {
            state.listOfItems.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.listOfItems = state.listOfItems.filter((item, index) => index !== action.payload);
        },
    },
});

export const { addItem, deleteItem } = todosSlice.actions;
