
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

// --- COMPONENTS --- //
import Card from '../Card/Card.jsx';

// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

// --- STYLES --- // 
import {
    sxAboutContainer,
    sxHeroContent,
    sxHeroText,
    sxCardContent,
    sxCoinCard,
    sxCount,
    sxAboutBody,
    sxButton,
    sxCenterText,
    trans,
} from '../App/App.style';

// --- PAGE ANIMATIONS FRAMER MOTION --- //
import { motion, AnimatePresence } from "framer-motion"


function About() {

    // INVENTORY grab ALL the genres from the store;


    const dispatch = useDispatch();
    const history = useHistory();

    const supportedCountries = useSelector(store => store.supportedCountries);
    // console.log('--- About Page supportedCountries:', supportedCountries);

    // our transition properties are located in app.style.js
    return (
        <motion.div
            initial={trans.initial}
            animate={trans.animate}
            exit={trans.exit}
            style={trans.style}
            transition={trans.time}
        >

            <Box sx={sxAboutContainer}>

                <Box sx={sxHeroContent}>
                    <Typography variant="h2" sx={sxHeroText}>Celsius Network's Reach</Typography>

                    <Typography variant="h6" sx={sxCount}>Supporting Customers in {supportedCountries?.length} Countries</Typography>
                </Box>

                <Box sx={sxCardContent}>
                    {supportedCountries.map((country, i) => (
                        <Box key={i} sx={sxCoinCard}>
                            <Card country={country} />
                        </Box>
                    ))}
                </Box>

            </Box>

        </motion.div>
    );
}

export default About;