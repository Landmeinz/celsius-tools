

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

// --- CHARTS --- // 
// import { Line, Bar, Doughnut } from 'react-chartjs-2';

// import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Bar, Scatter } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


// --- MUI --- //
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';


function RewardsChart({rewardRates}) {

    const dispatch = useDispatch();

    // let rewardRates = useSelector(store => store.rewardRates);

    useEffect(() => {
        dispatch({ type: 'FETCH_REWARDS' });
      }, [dispatch]);

    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Dataset 1',
    //             data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
    //             borderColor: 'rgb(255, 99, 132)',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //         },
    //         {
    //             label: 'Dataset 2',
    //             data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
    //             borderColor: 'rgb(53, 162, 235)',
    //             backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //         },
    //     ],
    // };


    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    // console.log('RewardsChart rewardRates', rewardRates.interestRates);
    const rewardRatesLength = rewardRates.interestRates.length;
    console.log(rewardRatesLength);

    const data = {
        datasets: [
            {
                label: 'Crypto Reward Rates By %',
                // data: Array.from({ length: 50}, () => ({
                //     x: faker.datatype.number({ min: 0, max: 50 }),
                //     y: faker.datatype.number({ min: 0, max: 20 }),
                // })),
                // data: [{
                //     x: 1,
                //     y: 3
                // }, {
                //     x: 2,
                //     y: 4
                // },{
                //     x: 3,
                //     y: 5
                // },{
                //     x: 4,
                //     y: 4
                // },{
                //     x: 5,
                //     y: 3
                // }],
                data: [10, 20, 30, 40, 50, 60, 70],

                backgroundColor: 'darkblue',
            },
        ],
    };


    return (

        <Box sx={{ width: 800, height: 600, display: 'flex', mx: 'auto', mt: 5, }}>
            <Line
                data={data}
                options={options}

                height={200}
                width={500}
            // options={{ maintainAspectRatio: false }}


            // {...props}
            />
        </Box>

    )

}

export default RewardsChart;