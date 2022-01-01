
import React, { useEffect, useState } from 'react';
// import { Chart } from "chart.js";
import { Scatter } from "react-chartjs-2";
import Annotation from "chartjs-plugin-annotation";
import { useSelector } from "react-redux";

// --- MUI --- //
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

// import { Chart, Bars, Transform } from 'rumble-charts';
import {
    BarChart, Bar, Cell, XAxis, YAxis,
    CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';



function ResultChart() {

    const rewardRates = useSelector(store => store.rewardRates);

    console.log('--- ResultChart rewardRates.interestRates', rewardRates.interestRates);


    const data =
        (
            rewardRates?.map(crypto => (
                {
                    id: crypto.currency.id,
                    name: crypto.coin,
                    percent: (crypto.rate * 100)
                }
            ))
        )
    data?.sort((a, b) => (a.percent > b.percent) ? 1 : -1)
    console.log('--- data', data);




    const getIntroOfPage = (label) => {
        if (label === 'Page A') {
            return "Page A is about men's clothing";
        }
        if (label === 'Page B') {
            return "Page B is about women's dress";
        }
        if (label === 'Page C') {
            return "Page C is about women's bag";
        }
        if (label === 'Page D') {
            return 'Page D is about household goods';
        }
        if (label === 'Page E') {
            return 'Page E is about food';
        }
        if (label === 'Page F') {
            return 'Page F is about baby food';
        }
        return '';
    };

    const CustomTooltip = ({ active, payload, label }) => {
        // console.log('--- can i log these vars?', active, payload, label );
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value}%`}</p>
                    <p className="intro">{getIntroOfPage(label)}</p>
                    <p className="desc">{`${payload.name}`}</p>
                </div>
            );
        }

        return null;
    };

    const [activeIndex, setActiveIndex] = useState('');


    function handleClick(action, data) {

        console.log('--- this is the data on click', data);

        switch (action) {
            case 'graph':
                console.log('CLICKED on the graph item');
                setActiveIndex(data)
                console.log('--- activeIndex:', activeIndex);
                break;

            default:
                break;
        }

    }; // handleClick

    return (
        // <Box sx={{
        //     width: 1200, height: 600, display: 'flex',
        //     justifyContent: 'center', mx: 'auto', mt: 5,
        // }}>

        // <BarChart
        //     width={1000}
        //     height={500}
        //     data={data}
        //     margin={{
        //         top: 10,
        //         right: 20,
        //         left: 5,
        //         bottom: 10
        //     }}
        // >
        //     <CartesianGrid strokeDasharray="3 3" />
        //     <XAxis dataKey="name" />
        //     <YAxis />
        //     <Tooltip />
        //     <Legend />
        //     <Bar dataKey="percent" fill="hsla(280, 50%, 50%, 1)" />
        // </BarChart>

        // </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 5, alignItems: 'center' }}>
            <p>Click each rectangle </p>
            
            <BarChart data={data} width={1000} height={300}>

                <Bar onClick={() => handleClick('graph')} dataKey="percent" fill="hsla(280, 50%, 50%, 1)">
                    {rewardRates?.map((entry, index) => (
                        <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
                    ))}
                </Bar>

                {/* <Bar onClick={(action) => handleClick('graph')} dataKey="percent" fill="hsla(280, 50%, 50%, 1)">
                    <Cell dataKey="percent" cursor="pointer" />
                </Bar> */}

                <XAxis dataKey="name" display="false" />
                {/* <Tooltip dataKey="name"/> */}
                <Tooltip content={<CustomTooltip />} />

            </BarChart>
            <p className="content">{'change this text'}</p>

        </Box>
    )
}

//  fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} 

// // Use annotation plugin
// Chart.register(Annotation);

// // import chartOptions from './modules/chartOptions';
// // import setData from './modules/dataOptions';



// // set data and options from response
// // if (results) {
// //     for (let i = 0; i < results.length; i++) {
// //         let handData = results[i];
// //         for (let score in handData.distribution) {
// //             data.datasets[i].data.push({
// //                 x: score,
// //                 y: handData.distribution[score].count
// //             });

// //             const line = options.plugins.annotation.annotations['line' + (i + 1)];
// //             line.xMax = handData.stats.avg;
// //             line.xMin = handData.stats.avg;
// //             line.enabled = true;
// //         }
// //     }
// // }



// function ResultChart({ rewardRates }) {

//     console.log('--- ResultChart rewardRates:', rewardRates.interestRates);

//     // init options for the graph
//     const chartOptions = {
//         // tooltips: {
//         //     callbacks: {
//         //         label: function (tooltipItem, data) {
//         //             const label = data.labels[tooltipItem.index];
//         //             return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
//         //         }
//         //     }
//         // },
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Crypto',
//                 },
//                 ticks: {
//                     display: false
//                 },
//             },
//             y: {
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: 'Rewards %',
//                 },
//                 // ticks: {
//                 //     // callback: function (value, index, values) {
//                 //     //     return Math.round((1.5 / 46) * 100) + '%';
//                 //     // }
//                 //     callback: function(value, index) {
//                 //         // Hide the label of every 2nd dataset
//                 //         return this.getLabelForValue(value);
//                 //       },
//                 // },
//             },
//         },
//         plugins: {
//             autocolors: false,
//             annotation: {
//                 annotations: {
//                     line1: {
//                         type: 'line',
//                         xMin: 10,
//                         xMax: 10,
//                         borderColor: 'rgb(255, 99, 132)',
//                         borderWidth: 1,
//                         label: {
//                             content: 'average',
//                             enabled: false,
//                             rotation: '90deg',
//                             font: { style: 'italic' }
//                         }
//                     },
//                     line2: {
//                         type: 'line',
//                         xMin: 0,
//                         xMax: 0,
//                         borderColor: 'rgb(54, 99, 132)',
//                         borderWidth: 1,
//                         label: {
//                             content: 'average',
//                             enabled: false,
//                             rotation: 'auto',
//                             font: { style: 'italic' }
//                         }
//                     }
//                 }
//             }
//         }
//     };

//     const setData = {
//         labels: [],
//         datasets: [{
//             label: 'Type',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [],
//             showLine: true
//         }],
//     };


//     return (
//         <Box sx={{ width: 800, height: 600, display: 'flex', mx: 'auto', mt: 5, }}>
//             <Scatter data={setData} options={chartOptions} />
//         </Box>
//     )
// }

export default ResultChart; 