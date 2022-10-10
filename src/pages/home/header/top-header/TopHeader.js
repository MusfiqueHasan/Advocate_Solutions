import React from 'react'
import { Box, Container, Tooltip, Typography } from '@mui/material'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';


const TopHeader = () => {
    return (
        <Box sx={{ height: 40, bgcolor: '#ccae62' }}>
            <Container sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ color: 'white', fontSize: 14, fontWeight: 'bold', fontFamily: '-moz-initial' }} >
                    Here is our
                    <span style={{ color: 'black', cursor: 'pointer' }}> Terms and condition </span>
                    for the better help.
                </Typography>
                <Tooltip title="User" placement="right">
                    <PeopleAltOutlinedIcon sx={{ color: 'white', cursor: 'pointer' }} />
                </Tooltip>
            </Container>
        </Box>
    )
}

export default TopHeader