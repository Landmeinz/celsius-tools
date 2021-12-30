
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

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
    sxAboutBody,
    sxButton,
    trans,
} from '../App/App.style';

// --- PAGE ANIMATIONS FRAMER MOTION --- //
import { motion, AnimatePresence } from "framer-motion"


function About() {

    // INVENTORY grab ALL the genres from the store;
   

    const dispatch = useDispatch();
    const history = useHistory();

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
                    <Typography variant="h1" sx={sxHeroText}>About Page</Typography>
                    <Typography variant="body1">Home Page Stuff Goes Here</Typography>
                </Box>

            </Box>

        </motion.div>
    )
};

export default About;