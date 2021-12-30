
import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

// --- MUI --- //
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';

// --- STYLES --- // 
import {
    sxHeader,
    sxProfilePhoto
} from '../App/App.style';


function Header() {

    const history = useHistory();

    return (

        <Box onClick={() => history.push('/')} sx={{cursor: 'pointer'}}>

            <Typography variant='h1' sx={sxHeader}>Celsius Tools</Typography>

        </Box>
    )
}; // Header

export default Header;