import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./redux/todoreducer";

import App from "./App";

const store = configureStore({
    reducer: { todos: todosSlice.reducer },
});

const container: any = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
