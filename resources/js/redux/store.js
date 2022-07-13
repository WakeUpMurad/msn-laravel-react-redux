import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import UsersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";


let reducers = combineReducers({
    usersPage: UsersReducer,
    authUserData: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunkMiddleware))(createStore);
let store = createStoreWithMiddleware(reducers);


window.store = store;

export default store;
