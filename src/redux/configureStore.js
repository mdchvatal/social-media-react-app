import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { TimelineData } from './timelineReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            timelineData: TimelineData,
            ...createForms({
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}