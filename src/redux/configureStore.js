import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { TimelineData } from './timelineReducer';
import { addPost } from './forms';
import { messageData } from './messageReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            timelineData: TimelineData,
            messageData: messageData,
            ...createForms({
                addPost: addPost
            })
        }),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
    return store;
}