import { combineReducers } from 'redux';
import search from './search';
import beer from './beer';
import loader from './loader';

export default combineReducers({
    search,
    beer,
    loader
});
