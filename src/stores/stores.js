import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from "../reducers/authReducer";
const middlewares = [thunk];

const store = createStore(
    combineReducers({
        auth: authReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;