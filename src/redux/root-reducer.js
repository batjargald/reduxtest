import { combineReducers } from 'redux';

import countReducer from './counter/index';


const rootReducer = combineReducers({
    counter: countReducer
});

export default rootReducer;