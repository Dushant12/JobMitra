// import { createStore } from "redux";
import { legacy_createStore as createStore } from 'redux'
import { reducer } from "./Redux/Reducer/index";

const store = createStore(reducer);

export {
    store
}