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


// --- SAGAS --- //

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_REWARDS', fetchRewards);
    // yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    // yield takeEvery('FETCH_GENRES', fetchAllGenres);
    // yield takeEvery('ADD_MOVIE', addMovie);
}; // rootSaga


// GET rewards rates
function* fetchRewards() {
    try {
        const rewards = yield axios.get('https://wallet-api.staging.celsius.network/util/interest/rates');
        console.log('--- index.js fetchRewards:', rewards.data);
        yield put({ type: 'SET_REWARDS', payload: rewards.data });

    } catch {
        console.log('fetchRewards ERROR');
    }
}; // fetchAllMovies



// GET all movies from the DB
// function* fetchAllMovies() {
//     try {
//         const movies = yield axios.get('/api/movie');
//         console.log('get all:', movies.data);
//         yield put({ type: 'SET_MOVIES', payload: movies.data });

//     } catch {
//         console.log('get all error');
//     }
// }; // fetchAllMovies


// // GET all genres with movie id from the DB;
// function* fetchAllGenres(action) {
//     console.log('THIS IS THE ACTION', action);

//     try {
//         const response = yield axios.get('/api/genre');
//         console.log('-------get all:', genres.data);
//         yield put({ type: 'ALL_GENRES', payload: response.data });

//     } catch {
//         console.log('fetchAllGenres GET all genre error');
//     }
// }; // fetchAllMovies


// // POST new movie to server, then FETCH all movies;
// function* addMovie(action) {
//     console.log('trying to addMovie here', action.paylod);

//     try {
//         yield axios.post('/api/movie', action.payload);
//         yield put({ type: 'FETCH_MOVIES' });
//     } catch (err) {
//         console.log('addMovie error', err);
//     }
// }; // addMovie




// --- REDUCERS --- //

// Store all rewardRates;
const rewardRates = (state = [], action) => {
    switch (action.type) {
        case 'SET_REWARDS':
            console.log('this is the rewardRates action.payload', action.payload);
            return action.payload;

        default:
            return state;
    }
}; // rewardRates

const selectedCrypto = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_CRYPTO':
            console.log('this is the selectedCrypto action.payload', action.payload);
            return action.payload;

        default:
            return state;
    }
}; // rewardRates




// // Used to store movies returned from the server
// const movies = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_MOVIES':
//             return action.payload;
//         default:
//             return state;
//     }
// }; // sagaMiddleware

// // Used to store the selected movie genres;
// const genres = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_GENRES':
//             // console.log('this is the SELECTED genres action.payload', action.payload);
//             return action.payload;

//         default:
//             return state;
//     }
// }; // genres

// // storing all of the movie genres pulled from the database;
// const allGenres = (state = [], action) => {
//     switch (action.type) {
//         case 'ALL_GENRES':
//             // console.log('this is the ALL genres action.payload', action.payload);
//             return action.payload;

//         default:
//             return state;
//     }
// }; // allGenres

// use as object as the starting state so that it matches our data type; movie list is an array of objects;
// const selectedMovie = (state = {}, action) => {
//     switch (action.type) {
//         case 'SET_SELECTED_MOVIE':
//             console.log('this is action.payload of selectedMovie', selectedMovie);
//             return action.payload
//         default:
//             return state;
//     }
// }; // selectedMovie

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        rewardRates,
        selectedCrypto,

        // movies,
        // genres,
        // allGenres,
        // selectedMovie,
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
