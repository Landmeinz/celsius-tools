
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// --- components --- //
import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';

// --- MUI --- //
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

// --- STYLES --- // 
import {
  theme,
  sxAppContainer,
  sxHeaderContainer,
  sxBodyContainer,
  sxCenterText,
} from './App.style.js';

// --- PAGE ANIMATIONS FRAMER MOTION --- //
// import { motion, AnimatePresence } from "framer-motion"
// import { AnimatePresence } from "framer-motion"
// import { motion, AnimatePresence } from "framer-motion"



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_REWARDS' });
  }, [dispatch]);


  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Router>

          <Box sx={sxAppContainer}>

            <Box sx={sxHeaderContainer}>
              <Header />
              <NavBar />
            </Box>

            <Switch>Ï
              <Route exact path="/" >
                <Home />
              </Route>

              <Route exact path="/about" >
                <About />
              </Route>
            </Switch>

          </Box>

        </Router>
      </ThemeProvider>
    </Box>
  );
}

export default App;