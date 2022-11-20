import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material';
import Slider from "react-slick";
import img1 from '../../../assets/images/slider-img3.png'
import img4 from '../../../assets/images/slider-img4.png'
import img5 from '../../../assets/images/slider-img5.png'
import img6 from '../../../assets/images/slider-img6png.webp'
import img2 from '../../../assets/images/slider-img2.png'




const HeaderCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Box sx={{ overFlow: 'hidden' }} >
      <Slider {...settings}>
        <Box
          sx={{
            height: '100vh',
            backgroundImage: `linear-gradient(rgba(180,180,180,0.8), rgba(180,180,180, 0.2)), url(${img2})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <Typography sx={{ fontFamily: '-moz-initial', fontWeight: 'bold', fontSize: 40, }}>We Are Lawyer Justice</Typography>
            <Typography sx={{ fontFamily: '-moz-initial', fontWeight: 500, fontSize: 70, lineHeight: 1, my: 2 }}>Attrorneys Fighting For <br /> Your Freedom </Typography>
            <Typography sx={{ fontWeight: 500, }}>We Have Helped Thousands of People to Get Relief From National Wide <br /> Fights WrongfullDenials. Now They Trusted Our Attorneys.
            </Typography>
            <Box>
              <Button sx={{
                bgcolor: '#192a56', color: 'white', fontWeight: 'bold', boxSizing: 'border-box', px: 5, py: 2, mt: 6,
                '&:hover': {
                  bgcolor: '#ccae62', color: 'white',
                },
              }}>
                CONTACT OUR ATTORNEYS
              </Button>
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            height: '100vh',
            backgroundImage: `linear-gradient(rgba(180,180,180,0.8), rgba(180,180,180, 0.2)), url(${img4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
            <Typography sx={{ fontFamily: '-moz-initial', fontWeight: 'bold', fontSize: 40, }}>
              We Are Lawyer Justice
            </Typography>

            <Typography sx={{ fontFamily: '-moz-initial', fontWeight: 500, fontSize: 70, lineHeight: 1, my: 2, textAlign: 'end' }}>
              Attrorneys Fighting For <br /> Your Freedom
            </Typography>

            <Typography sx={{ fontWeight: 500, textAlign: 'end' }}>
              We Have Helped Thousands of People to Get Relief From National Wide <br /> Fights WrongfullDenials. Now They Trusted Our Attorneys.
            </Typography>
            
            <Box>
              <Button sx={{
                bgcolor: '#192a56', color: 'white', fontWeight: 'bold', boxSizing: 'border-box', px: 5, py: 2, mt: 6,
                '&:hover': {
                  bgcolor: '#ccae62', color: 'white',
                },
              }}>
                CONTACT OUR ATTORNEYS
              </Button>
            </Box>
          </Container>

        </Box>

      </Slider>
    </Box >
  )
}

export default HeaderCarousel