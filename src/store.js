import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer';

const confirmMiddleware = store => next => action => {
    if (action.shouldConfirm) {
        if (window.confirm('Are you sure?')) {
            next(action);
        }
    } else {
        next(action);
    }
}

const store = createStore(reducer, applyMiddleware(confirmMiddleware));

// Subscribe to State changes
store.subscribe((...args) => console.log(store.getState()));

export default store;
