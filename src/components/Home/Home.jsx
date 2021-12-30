
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

// --- COMPONENTS --- //
import RewardsChart from './RewardsChart.jsx';

// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

// --- STYLES --- // 
import {
    sxHomeContainer,
    trans,
    sxHeroContent,
    sxHeroText,
    sxCardContent,
    sxPopUpDetail,
    sxCoinCard,
    sxPhotoBox,
    sxRateText,
    sxCenterText,
} from '../App/App.style';

// --- PAGE ANIMATIONS FRAMER MOTION --- //
import { motion, AnimatePresence } from "framer-motion"


function Home() {

    const dispatch = useDispatch();

    const [detailWindowStatus, setDetailWindowStatus] = useState(false);
    console.log('--- current detailWindowStatus:', detailWindowStatus);

    let rewardRates = useSelector(store => store.rewardRates);
    let selectedCrypto = useSelector(store => store.selectedCrypto);

    // console.log('--- HOME PAGE reward rates:', rewardRates);
    // console.log('--- HOME PAGE rewardRates.interestRates:', rewardRates.interestRates);

    // BUTTON to go back to the movie list or to the add movie form; 
    function handleClick(action, crypto) {

        switch (action) {
            case 'detail':
                console.log('CLICKED on the crypto card', crypto);
                dispatch({ type: 'SET_SELECTED_CRYPTO', payload: crypto })
                setDetailWindowStatus(true)
                break;

            case 'close':
                console.log('CLICKED to close the dialog box');
                setDetailWindowStatus(false)
                break;

            default:
                break;
        }

    }; // handleClick

    return (
        <motion.div
            initial={trans.initial}
            animate={trans.animate}
            exit={trans.exit}
            style={trans.style}
            transition={trans.time}
        >
            <Box sx={sxHomeContainer} >

                <Box sx={sxHeroContent}>
                    <Typography variant="h2" sx={sxHeroText}>Celsius Reward Rates</Typography>
                </Box>


                {detailWindowStatus &&
                    <Box sx={sxPopUpDetail}>

                        <Dialog sx={sxCenterText} onClick={() => handleClick('close')} open={detailWindowStatus}>

                            <DialogTitle>{selectedCrypto?.currency.name}</DialogTitle>

                            <CardMedia sx={sxPhotoBox} component="img" image={selectedCrypto?.currency.image_url} />

                            <Typography variant="h6">{selectedCrypto?.coin}</Typography>
                            <Typography variant="h6">{(selectedCrypto?.rate * 100).toFixed(2)}%</Typography>

                            {/* <Typography variant="body1">{selectedCrypto?.currency.id}</Typography> */}

                        </Dialog>

                    </Box>}


                <Box sx={sxCardContent}>

                    {rewardRates.interestRates?.map(crypto => (

                        <Box key={crypto.currency.id} sx={sxCoinCard} onClick={() => handleClick('detail', crypto)}>
                            <CardMedia sx={sxPhotoBox} component="img" image={crypto.currency.image_url} />
                            <Stack sx={{ mx: 'auto' }}>
                                <Typography sx={sxRateText} variant="body1">{crypto.coin}</Typography>
                                <Typography sx={sxRateText} variant="h6">{(crypto.rate * 100).toFixed(2)}%</Typography>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box>
                <RewardsChart />
            </Box>
        </motion.div>
    );
}

export default Home;



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
