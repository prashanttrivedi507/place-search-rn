import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from './reducer';

const rootReducer = combineReducers(
    { places: locationReducer }
);

const configurestore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configurestore;