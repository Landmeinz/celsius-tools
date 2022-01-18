import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';



// -------------- //
// --- SAGAS --- //

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_REWARDS', fetchRewards);
    yield takeEvery('FETCH_COUNTRIES', fetchCountries);

}; // rootSaga



// --- GET REWARD RATES --- //

function* fetchRewards() {
    try {
        const rewards = yield axios.get('api/rewards');
        // console.log('--- index.js GET fetchRewards:', rewards.data);
        yield put({ type: 'SET_REWARDS', payload: rewards.data });

    } catch {
        console.log('fetchRewards ERROR');
    }
}; // fetchRewards



// --- GET COUNTRIES --- //
function* fetchCountries() {
    try {
        const rewards = yield axios.get('api/countries');
        console.log('--- index.js GET fetchCountries:', rewards.data);
        yield put({ type: 'SET_COUNTRIES', payload: rewards.data });

    } catch {
        console.log('--- ! fetchCountries ERROR');
    }
}; // fetchCountries






// ----------------- //
// --- REDUCERS --- //

// Store all rewardRates;
const rewardRates = (state = [], action) => {
    switch (action.type) {
        case 'SET_REWARDS':
            // console.log('--- index.js rewardRates action.payload', action.payload.interestRates);
            return action.payload.interestRates;

        default:
            return state;
    }
}; // rewardRates


// Store the clicked on crypto;
const selectedCrypto = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_CRYPTO':
            console.log('--- index.js selectedCrypto action.payload', action.payload);
            return action.payload;

        default:
            return state;
    }
}; // selectedCrypto



// Store all supportedCountries;
const supportedCountries = (state = [], action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            // console.log('--- index.js supportedCountries action.payload', action.payload.countries);
            return action.payload.countries;

        default:
            return state;
    }
}; // rewardRates




// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        rewardRates,
        selectedCrypto,
        supportedCountries,

    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
); // storeInstance



// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
