import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./users_reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    users: usersReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store