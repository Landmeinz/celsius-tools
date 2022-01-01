
import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// --- MUI --- //
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CottageIcon from '@mui/icons-material/Cottage';
import HelpIcon from '@mui/icons-material/Help';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


// --- STYLES --- // 
import {
    sxButtonBox,
    sxButton,
    sxNavLink,
} from '../App/App.style';


function NavBar() {

    const history = useHistory();

    // BUTTON to go back to the movie list or to the add movie form; 
    function handleClick(pageDirection) {

        switch (pageDirection) {
            case 'home':
                console.log('CLICKED on the home button');
                history.push('/')
                break;

            case 'about':
                console.log('CLICKED on the about button');
                history.push('/about')
                break;
                
            default:
                break;
        }

    }; // handleClick


    return (
        <Box sx={sxButtonBox}>
            {/* <Tooltip title="Home" placement="left"> */}
                <Box sx={sxNavLink} onClick={() => handleClick('home')}>
                    <CottageIcon fontSize='large' />
                </Box>
            {/* </Tooltip> */}

            {/* <Tooltip title="About" placement="left"> */}
                <Box sx={sxNavLink} onClick={() => handleClick('about')}>
                    <HelpIcon fontSize='large' />
                </Box>
            {/* </Tooltip> */}
        </Box >
    )
}; // NavBar

export default NavBar;