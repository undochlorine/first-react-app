import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'))
function renderEntireDom(state={}) {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App
                        state={state}
                    />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}
renderEntireDom(store.getState())
store.subscribe(() => renderEntireDom(store.getState()))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();