import { createStore } from 'redux';

import { TESTACTION } from './actions';

const getInitialState = () => ({
    test: ""
});

function appStore(state, { type, payload }) {
    switch(type) {
        case TESTACTION:
        return { ...state, test: payload.test };

        default:
        return { ...state };
    }
}

const store = createStore(appStore, getInitialState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;