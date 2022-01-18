
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

// --- COMPONENTS --- //


// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';


// --- STYLES --- // 
import {
    sxCoinCard,
    sxEmojiBox,
    sxPhotoBox,
    sxRateText,
    sxCenterText,
} from '../App/App.style';




function Card({ crypto, country }) {

    return (
        <>
            {crypto ?
                <>
                    <CardMedia sx={sxPhotoBox} component="img" image={crypto.currency.image_url} />
                    <Stack sx={{ mx: 'auto' }}>
                        <Typography variant="body1">{crypto.coin}</Typography>
                        <Typography variant="h6">{(crypto.rate * 100).toFixed(2)}%</Typography>
                    </Stack>
                </> : <></>
            }

            {country ?
                <>
                    <Box sx={sxEmojiBox}>{country.emoji}</Box>
                    <Stack sx={{ mx: 'auto' }}>
                        <Typography variant="subtitle2">{country.name}</Typography>
                        <Typography variant="h6">{(country.ioc)}</Typography>
                    </Stack>
                </> : <></>
            }
        </>
    )
}

export default Card;

// <Typography key={i} sx={{my: -5,}} variant="body1">{country.emoji} {country.ioc}: {country.name}</Typography>


    // const history = useHistory();
    // const dispatch = useDispatch();
    // const movies = useSelector(store => store.movies);


    // // on page load fetch all the movies from our database;
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);



    // // BUTTONS to go back to the movie list or to the add movie form;
    // function handleClick(input, movie) {

    //     switch (input) {
    //         case 'dispatch':
    //             console.log('CLICKED on the image');
    //             console.log('this is the current image from handleClick', movie);
    //             dispatch({
    //                 type: 'SET_SELECTED_MOVIE',
    //                 payload: movie
    //             });

    //             axios({
    //                 method: 'GET',
    //                 url: `/api/genre/${movie.id}`
    //             })
    //                 .then(response => {
    //                     console.log('GET /api/genre response', response);
    //                     dispatch({
    //                         type: 'SET_GENRES',
    //                         payload: response.data
    //                     })
    //                 })
    //                 .catch(error => {
    //                     console.log('GET /api/genre ERROR', error);
    //                 });

    //             history.push('/details');
    //             break;

    //         default:
    //             break;
    //     }; // switch

    // }; // handleClick
