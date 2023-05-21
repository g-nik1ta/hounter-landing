import {combineReducers, createStore} from "redux";
import slidersInfoReducer from './slidersInfoReducer';
import categoryReducer from './categoryReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    slidersInfoReducer,
    categoryReducer
})

export const store = createStore(rootReducer, composeWithDevTools());