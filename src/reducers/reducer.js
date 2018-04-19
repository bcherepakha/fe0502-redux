import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';


const logger = (state = true, action) => {
    console.log({action});
    return state;
}

export default combineReducers({
    logger,
    todos,
    visibilityFilter
})
