import { combineReducers } from "redux";
import { reducerFn } from "./reducerFn";
import { getData } from "./getdata";
import { Uireducer } from './uireducer';

const rootReducer = combineReducers({
    reducerFn,
    getData,
    Uireducer,
})

export default rootReducer;