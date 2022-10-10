import { Box, Container, Paper, Typography } from '@mui/material';
import React from 'react'
import CountUp from 'react-countup';

const TotalCounting = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 10 }}>
            <Paper elevation={3} sx={{ width: '80%', height: 120, bgcolor: '#ccae62', display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CountUp end={1390} duration={5} style={{ color: 'white', fontWeight: 'bold', fontSize: 40, fontFamily: '-moz-initial' }} />
                    <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: 20, fontFamily: '-moz-initial' }}>Attorneys</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CountUp end={1300} duration={5} style={{ color: 'white', fontWeight: 'bold', fontSize: 40, fontFamily: '-moz-initial' }} />
                    <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: 20, fontFamily: '-moz-initial' }}>Total News</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CountUp end={11076} duration={5} style={{ color: 'white', fontWeight: 'bold', fontSize: 40, fontFamily: '-moz-initial' }} />
                    <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: 20, fontFamily: '-moz-initial' }}>Clients</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CountUp end={80120} duration={5} style={{ color: 'white', fontWeight: 'bold', fontSize: 40, fontFamily: '-moz-initial' }} />
                    <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: 20, fontFamily: '-moz-initial' }}>Total Case</Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default TotalCounting