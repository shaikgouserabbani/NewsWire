import {combineReducers} from 'redux';
import news from './newsReducers'

const appReducers = combineReducers({
    news
});
export default appReducers;