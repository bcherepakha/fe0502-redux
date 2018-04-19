import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/reducerNewApp';
import iFetch from './i/XHR/iFetch.js';

const favourites = window.localStorage.getItem('favourites'),
    initialState = {
        beer: {
            beer: [],
            favourites: {}
        }
    };

if (favourites) {
    try {
        initialState.beer = {
            beer: [],
            favourites: JSON.parse(favourites)
        };
    } catch(ex) {
        console.error(`Parse favourites failed`, ex);
    }
}

const loggMiddleware = store => next => action => {
    console.log('loggMiddleware', {
        store: store.getState(), next, action
    });

    next(action);
}

const fetchMiddleware = store => next => action => {
    if (action.fetch) {
        iFetch(action.fetch)
            .then(response => next({
                type: action.type,
                success: response
            }))
            .catch(response => next({
                type: action.type,
                error: response
            }));
    } else {
        next(action);
    }
}

const store = createStore(reducer, compose(
    applyMiddleware(loggMiddleware),
    applyMiddleware(fetchMiddleware)
));

export default store;
