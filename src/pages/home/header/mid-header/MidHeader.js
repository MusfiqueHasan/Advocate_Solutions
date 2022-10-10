import React from 'react';
import { Box, Container, Tooltip, Typography } from '@mui/material'
import logo from '../../../../assets/images/logo.png'

const MidHeader = () => {
    return (
        <Box sx={{ height: '100px' }}>
            <Container sx={{ height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Box sx={{ width: '100px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: 18, fontFamily: '-moz-initial', }}>Advocate</span>
                    <img src={logo} alt="" />
                    <span style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: 18, fontFamily: '-moz-initial', }}>Solutions</span>
                </Box>

            </Container>
        </Box>
    )
}

export default MidHeader