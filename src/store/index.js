import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducerFn } from './reducers/reducerFn';
import rootReducer from './reducers/rootreducer';



let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;